 import { Product } from "../models/Products";

export interface IProductService{
    getById(id:number):Product;
    getProductList():Array<Product>;
    saveProduct(product:Product):void;
    deleteProduct(product:Product):void
}