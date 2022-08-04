"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var Products_1 = require("../models/Products");
var ProductList_1 = require("../ListOfProduct/ProductList");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this._productList = new ProductList_1.ProductList();
        this._Products = new Array();
        this._productList.getProducts().forEach(function (prooduct) { _this._Products.push(prooduct); });
    }
    ProductService.prototype.getById = function (id) {
        return this._Products.filter(function (x) { return x.id == id; })[0];
    };
    ProductService.prototype.getProductList = function () {
        return this._Products;
    };
    ProductService.prototype.saveProduct = function (product) {
        var newProduct = new Products_1.Product(5, "apple", "12promax");
        this._Products.push(newProduct);
    };
    ProductService.prototype.deleteProduct = function (product) {
        console.log("silindi");
    };
    return ProductService;
}());
exports.ProductService = ProductService;
