export interface ProdutsInfos {
    product_id?: string;
    option: string;
    available: boolean;
}

export interface StoreProduct {
    product_name: string;
    description: string;
    price: string;
    tag: string;
    user_id?: string;
    url_img?: string;
    available: boolean;
    infos?: [ProdutsInfos]
}

export interface ProductUpdate {
    product_name?: string;
    description?: string;
    price?: string;
    tag?: string;
    user_id?: string;
    url_img?: string;
    available?: boolean;
}