import { IProductService } from "../Interfaces/IProductService";
import { Product } from "../models/Products";
import {ProductList} from '../ListOfProduct/ProductList'

export class ProductService implements IProductService{
    private _productList:ProductList;
    private _Products:Array<Product>;

    constructor() {
      this._productList=new ProductList();
      this._Products=new Array<Product>();
      this._productList.getProducts().forEach(prooduct => {this._Products.push(prooduct)});
    }

    getById(id: number): Product {
      return this._Products.filter(x=>x.id==id)[0]
    }
    getProductList(): Product[] {
        return this._Products;
    }
    saveProduct(product: Product): void {
        let newProduct=new Product(5,"apple","12promax")
        this._Products.push(newProduct)
    }
    deleteProduct(product: Product): void {
       console.log("silindi");
    }

}