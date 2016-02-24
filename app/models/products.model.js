System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductModel;
    return {
        setters:[],
        execute: function() {
            ProductModel = (function () {
                function ProductModel(prodImage, prodName, prodDescription) {
                    if (prodImage === void 0) { prodImage = ""; }
                    if (prodName === void 0) { prodName = ""; }
                    if (prodDescription === void 0) { prodDescription = ""; }
                    this.prodImage = prodImage;
                    this.prodName = prodName;
                    this.prodDescription = prodDescription;
                }
                return ProductModel;
            }());
            exports_1("ProductModel", ProductModel);
        }
    }
});
//# sourceMappingURL=products.model.js.map