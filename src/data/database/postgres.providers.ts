import { createConnection } from 'typeorm';
import { Users } from '../../modules/users/users.entity';
import { Products } from '../../modules/products/products.entity';
import { ProductsInfos } from '../../modules/products/productsInfos.entity';



export const postgresProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: process.env.POSTGRES_URL,
            port: 5432,
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [Users, Products, ProductsInfos],
            synchronize: true,
            ssl: { rejectUnauthorized: false },
        })
    }
]