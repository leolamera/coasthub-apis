import { createConnection } from 'typeorm';
import { Users } from '../../modules/users/users.entity';
import { Products } from '../../modules/products/products.entity';
import { ProductsInfos } from '../../modules/products/productsInfos.entity';



export const postgresProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'ec2-3-218-47-9.compute-1.amazonaws.com',
            port: 5432,
            username: 'nxjrmxfvpgjwqy',
            password: '49ad8a1be849d309b8b0c57482010d10fc9da0ef78a846585dd803a83e0e9066',
            database: 'dflpa76419ge2b',
            entities: [Users, Products, ProductsInfos],
            synchronize: true,
            ssl: { rejectUnauthorized: false },
        })
    }
]