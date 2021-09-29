import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Products } from './products.entity';
import { ProductsInfos } from './productsInfos.entity';
import FirestoreInstance from '../../data/database/firestore.providers';
import StorageInstance from '../../data/assets/storage.providers';

import { Firestore } from '../../data/database/firestore.providers';
import { StorageGCP } from '../../data/assets/storage.providers';
import { StoreProduct, ProductUpdate } from '../../@types/products.interface';
import { ResponseService } from '../../@types/global.interface';


@Injectable()
export class ProductService {
    firestore: Firestore;
    storage: StorageGCP;

    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productsRepository: Repository<Products>,
        @Inject('PRODUCTS_INFOS_REPOSITORY')
        private productsInfosRepository: Repository<ProductsInfos>
    ) {
        this.firestore = FirestoreInstance
        this.storage = StorageInstance
    }

    public async getAllProductsByUser(userId: string): Promise<ResponseService>{

        const response = await this.productsRepository.find({ user_id: userId })

        return {
            status: HttpStatus.OK,
            data: response
        }

    }

    public async createProduct(userId: string, data: StoreProduct): Promise<ResponseService> {
        
        const postgresModel = this.productPostgresModel(userId, data)
        await this.productsRepository.save(postgresModel)

        return {
            status: HttpStatus.CREATED,
            data: { mensagem: "Produto cadastrado com sucesso" }
        }
    }

    public async updateProduct(productId: string, data: ProductUpdate) {
        await this.productsRepository.update({ id: productId}, data)

        return {
            status: HttpStatus.NO_CONTENT,
            data: { mensagem: "Produto cadastrado com sucesso" }
        }

    }

    private productPostgresModel(userId: string, data: StoreProduct) {

        return { ...data, user_id: userId, timestamp: `${Date.now()}` }
    }
}