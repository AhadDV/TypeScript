"use strict";
exports.__esModule = true;
var ProductService_1 = require("../Implementations/ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getById(1);
console.log(result);
