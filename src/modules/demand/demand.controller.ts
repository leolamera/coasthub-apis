import { Controller, Post, Get, Patch, Body, Res } from '@nestjs/common';
import { Response } from 'express';

import { DemandService } from './demand.service';

@Controller('demand')
export class DemandController {

    constructor(
        private demandService: DemandService
    ) {}

    @Post()
    public async newDemand(@Res() response: Response): Promise<Response> {
        return response.status(200).json({})
    }

    @Patch()
    public async editDemand(@Res() response: Response): Promise<Response> {
        return response.status(200).json({})
    }

    @Get()
    public async getDemandByUser(@Res() response: Response): Promise<Response> {
        return response.status(200).json({})
    }

    @Get(':producId')
    public async getDemandDetails(@Res() response: Response): Promise<Response> {
        return response.status(200).json({})
    }
}