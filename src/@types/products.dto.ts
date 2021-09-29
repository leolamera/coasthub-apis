import { ProdutsInfos, ProductUpdate } from './products.interface'

export type StoreProduct = {
    product_name: string;
    description: string;
    price: string;
    tag: string;
    url_img?: string;
    available: boolean;
    infos?: [ProdutsInfos]
}

export type UpdateProduct = {
    product_id: string;
    data: ProductUpdate
}