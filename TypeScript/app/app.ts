import {ProductService} from '../Implementations/ProductService'

let  _productService=new ProductService();
 var result;
 result=_productService.getById(1)
 console.log(result);
 