import { Module } from '@nestjs/common';
import { PostgresModule } from '../../data/database/postgres.module'
import { userProviders } from './users.providers';
import { UsersController } from './users.controller';
import { UserService } from './users.service'

@Module({
    imports: [PostgresModule],
    providers: [...userProviders, UserService],
    controllers: [UsersController],
    exports: [UserService]
})
export class UserModule {}
