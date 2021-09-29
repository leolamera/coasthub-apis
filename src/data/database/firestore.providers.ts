import * as admin from 'firebase-admin';
const serviceAccount = require('../../../firebase.json')

export class Firestore {
    db: any

    constructor() {

        this.db = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        }).firestore()
    }

    public async storeDocument(collectionName: string, document: any): Promise<any> {
        const dbRef = this.db.collection(collectionName).doc()
        await dbRef.set(document)
    }

}


export default new Firestore()