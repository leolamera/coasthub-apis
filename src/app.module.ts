import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/products/products.module';
import { DemandModule } from './modules/demand/demand.module';
import { AuthModule } from './modules/users/certs/auth/auth.module';



@Module({
  imports: [ConfigModule.forRoot(), AuthModule, ProductModule, DemandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
