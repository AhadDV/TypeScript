import {
    Product
} from "../models/Products";

export class ProductList {
    private products: Array < Product > ;

    constructor() {
        this.products = new Array < Product > (
            new Product(1, "Iphone", "X"),
            new Product(2, "Samsung", "S5")
        )
    }
    getProducts(): Product[] {
        return this.products;
    }
}