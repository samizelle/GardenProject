import { URL } from 'url';

export interface Product {
    id: number;
    product_name: string;
    product_description: string;
    product_price: number;
    product_image: URL;
    createdAt: Date;
    updatedAt: Date;
    userUid: string
}