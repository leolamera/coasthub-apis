import { Controller, Post, Get, Patch, Body, Res, UseGuards, Req  } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from './users.service';
import { StoreClientUser, StoreBussinesUser } from '../../@types/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor (
        private userService: UserService
    ) {}

    @Post()
    public async createNewClientUser(@Body() dto: StoreClientUser, @Res() response: Response): Promise<Response>{

        const responseService = await this.userService.createUser(dto)
        return response.status(responseService.status).json(responseService.data)
    }

    @Post('bussines')
    public async createNewBussinesUser(@Body() dto: StoreBussinesUser, @Res() response: Response): Promise<Response>{

        const responseService = await this.userService.createBussinesUser(dto)
        return response.status(responseService.status).json(responseService.data)
    }

    @Patch()
    public async updateUser(@Body() dto: StoreBussinesUser, @Res() response: Response) {

    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async getUserById(@Req() request) {
        const { id: userId } = request.user
        return {
            user: userId
        }
    }
}