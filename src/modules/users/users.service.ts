import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Users } from './users.entity';
import FirestoreInstance from '../../data/database/firestore.providers';
import { Firestore } from '../../data/database/firestore.providers';
import { HashService } from './certs/hash.service';

import { StoreClientUser, StoreBussinesUser, PostgresModelClient, FiretestModelClient, FiretestModelBussines } from '../../@types/users.interface';
import { ResponseService } from '../../@types/global.interface';

import EmailSenderInstance from '../../data/assets/email.providers';
import { EmailSender } from '../../data/assets/email.providers';



@Injectable()
export class UserService {
    firestore: Firestore
    hash: HashService
    emailSender: EmailSender

    
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<Users>,
    ) {
        this.firestore = FirestoreInstance
        this.hash = new HashService()
        this.emailSender = EmailSenderInstance
    }

    public async createBussinesUser(userObject: StoreBussinesUser): Promise<ResponseService> {

        const foundedUser = await this.findUserByEmail(userObject.email)

        if (!!foundedUser) {
            return {
                status: HttpStatus.CONFLICT,
                data: { mensagem: "o e-mail informado já consta em nosso banco de dados" }
    
            }
        }

        const postgresModel = await this.createPostgresObject(userObject)
        const { id: userId } = await this.userRepository.save(postgresModel)
        const firestoreModel = this.createFirestoreObjectBussines(userId, userObject)
        await this.firestore.storeDocument('users', firestoreModel)
        await this.emailSender.sendEmail(userObject.email, true)
        return {
            status: HttpStatus.CREATED,
            data: { mensagem: "usuário foi criado com sucesso" }
        }
    }

    public async createUser(userObject: StoreClientUser): Promise<ResponseService> {

        const foundedUser = await this.findUserByEmail(userObject.email)

        if (!!foundedUser) {
            return {
                status: HttpStatus.CONFLICT,
                data: { mensagem: "o e-mail informado já consta em nosso banco de dados" }
    
            }
        }

        const postgresModel = await this.createPostgresObject(userObject)
        const { id: userId } = await this.userRepository.save(postgresModel)
        const firestoreModel = this.createFirestoreObjectClient(userId, userObject)
        await this.firestore.storeDocument('users', firestoreModel)
        await this.emailSender.sendEmail(userObject.email, false)

        return {
            status: HttpStatus.CREATED,
            data: { mensagem: "usuário foi criado com sucesso" }

        }
    }

    public async findUserByEmail(email: string): Promise<Users> {
        return await this.userRepository.findOne({ email: email })
    }

    private createFirestoreObjectClient(userId: string, userObject: StoreClientUser): FiretestModelClient {

        return {
            user_id: userId,
            firstname: userObject.firstName,
            lastname: userObject.lastName,
            cpf: userObject.document,
            adress: [
                {
                    cep: userObject.cep,
                    logradouro: userObject.adress,
                    numero: userObject.number,
                    complemento: userObject.obs,
                    cidade: userObject.city,
                    uf: userObject.state
                }
            ]
        }
    }

    private createFirestoreObjectBussines(userId: string, userObject: StoreBussinesUser): FiretestModelBussines {

        return {
            user_id: userId,
            bussinesName: userObject.bussinesName,
            categorie: userObject.categorie,
            closeTime: userObject.closeTime,
            comercialName: userObject.comercialName,
            deliveryPrice: userObject.deliveryPrice,
            document: userObject.document,
            minimiumDeliveryPrice: userObject.minimiumDeliveryPrice,
            openTime: userObject.openTime,
            subcategorie: userObject.subcategorie,
            deliveryRangeLimit: userObject.deliveryRangeLimit,
            deliveryTimeLimit: userObject.deliveryTimeLimit,
            adress: [
                {
                    cep: userObject.cep,
                    logradouro: userObject.adress,
                    numero: userObject.number,
                    complemento: userObject.obs,
                    cidade: userObject.city,
                    uf: userObject.state,
                }
            ]
        }
    }

    private async createPostgresObject(userObject: StoreClientUser | StoreBussinesUser): Promise<PostgresModelClient> {

        const hashedPassowrd = await this.hash.hashString(userObject.password)

        return {
            email: userObject.email,
            password: hashedPassowrd,
            bussines: false,
            timestamp: `${Date.now()}`
        }
    }
}