import { Module } from '@nestjs/common';
import { PostgresModule } from '../../data/database/postgres.module'
import { productsProviders } from './products.providers';
import { productsInfosProviders } from './productsInfos.providers';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';


@Module({
    imports: [PostgresModule],
    providers: [...productsProviders, ...productsInfosProviders, ProductService],
    controllers: [ProductsController]
})
export class ProductModule {}
