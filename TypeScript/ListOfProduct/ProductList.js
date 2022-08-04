"use strict";
exports.__esModule = true;
exports.ProductList = void 0;
var Products_1 = require("../models/Products");
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.products = new Array(new Products_1.Product(1, "Iphone", "X"), new Products_1.Product(2, "Samsung", "S5"));
    }
    ProductList.prototype.getProducts = function () {
        return this.products;
    };
    return ProductList;
}());
exports.ProductList = ProductList;
