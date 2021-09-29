export interface StoreClientUser {
    adress: string;
    cep: string;
    city: string;
    document: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    state: string;
    number: string;
    obs: string;
}

export interface StoreBussinesUser {
    adress: string;
    bussinesName: string;
    categorie: string;
    cep: string;
    city: string;
    closeTime: string;
    comercialName: string;
    deliveryPrice: string;
    document: string;
    email: string;
    minimiumDeliveryPrice: string;
    number: string;
    obs: string;
    openTime: string;
    password: string;
    state: string;
    subcategorie: string;
    deliveryRangeLimit: number;
    deliveryTimeLimit: number;
}

export interface PostgresModelClient {
    email: string;
    password: string;
    bussines: boolean;
    timestamp: string;
}

export interface FiretestModelBussines {
    user_id: string;
    bussinesName: string;
    categorie: string;
    closeTime: string;
    comercialName: string;
    deliveryPrice: string;
    document: string;
    minimiumDeliveryPrice: string;
    openTime: string;
    subcategorie: string;
    deliveryRangeLimit: number;
    deliveryTimeLimit: number;
    adress: [AdressObject]
}

export interface FiretestModelClient {
    user_id: string;
    firstname: string;
    lastname: string;
    cpf: string;
    adress: [AdressObject]
}

interface AdressObject  {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
}