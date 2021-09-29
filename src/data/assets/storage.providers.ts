import { Storage } from '@google-cloud/storage'
const serviceAccount = require('../../../firebase.json')

export class StorageGCP {
    storage: Storage

    constructor () {
        this.storage = new Storage({
            credentials: serviceAccount,
            projectId: 'coasthub-803ac'
        })
    }

    async getBucktsName() {
        this.storage.getBuckets().then(x => console.log(x))
    }
}

export default new StorageGCP()