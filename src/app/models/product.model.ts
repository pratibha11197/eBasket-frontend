import { ProductCategory } from "./productCategory.model";

export class Product{
    product_id!: number;
    productName!: string;
    price!: number;
    weight!: number;
    shortDescription!: string;
    longDescription!: string;
    category!: ProductCategory;
    productImage!: string;
    productStocks!: number;
}