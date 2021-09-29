import { Connection } from 'typeorm';
import { ProductsInfos } from './productsInfos.entity';

export const productsInfosProviders = [
    {
        provide: 'PRODUCTS_INFOS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ProductsInfos),
        inject: ['DATABASE_CONNECTION']
    }
]