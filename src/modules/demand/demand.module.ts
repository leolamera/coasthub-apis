import { Module } from '@nestjs/common';

import { DemandController } from './demand.controller';
import { DemandService } from './demand.service';


@Module({
    imports: [],
    providers: [DemandService],
    controllers: [DemandController]
})
export class DemandModule {}
