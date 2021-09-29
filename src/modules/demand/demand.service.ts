import { Injectable, HttpStatus } from '@nestjs/common';


import FirestoreInstance from '../../data/database/firestore.providers';
import { Firestore } from '../../data/database/firestore.providers';

@Injectable()
export class DemandService {
    firestore: Firestore;

    constructor(
    ) {
        this.firestore = FirestoreInstance
    }
}