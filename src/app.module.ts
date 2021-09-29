import { Module } from '@nestjs/common';

import { UserModule } from './modules/users/users.module';
import { ProductModule } from './modules/products/products.module';
import { DemandModule } from './modules/demand/demand.module';
import { AuthModule } from './modules/users/certs/auth/auth.module';



@Module({
  imports: [AuthModule, ProductModule, DemandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
