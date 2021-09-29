import { Controller, Post, Get, Patch, Body, Res, UseGuards, Req } from '@nestjs/common';
import { Response } from 'express';

import { ProductService } from './products.service';
import { StoreProduct, UpdateProduct } from '../../@types/products.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {

    constructor(
        private productService: ProductService
    ) {}

    @Post()
    public async newProduct(@Req() request, @Body() dto: StoreProduct, @Res() response: Response): Promise<Response> {
        const { id: userId } = request.user
        const responseService = await this.productService.createProduct(userId, dto)
        
        return response.status(responseService.status).json(responseService.data)
    }

    @Patch()
    public async editProduct(@Body() dto: UpdateProduct, @Res() response: Response): Promise<Response> {

        const { product_id: productId, data: updateObject } = dto
        const responseService = await this.productService.updateProduct(productId, updateObject)

        return response.status(responseService.status).json(responseService.data)
    }

    @Get()
    public async getProductsByUser(@Req() request, @Res() response: Response): Promise<Response> {
        const { id: userId } = request.user
        const responseService = await this.productService.getAllProductsByUser(userId)
        
        return response.status(responseService.status).json(responseService.data)
    }
}