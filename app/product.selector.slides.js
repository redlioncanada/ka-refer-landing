System.register(['angular2/core', './models/products.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, products_model_1;
    var ProductSlides;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            }],
        execute: function() {
            ProductSlides = (function () {
                function ProductSlides() {
                    this.products = [
                        new products_model_1.ProductModel("./public/images/products/5-door.png", "5 door", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                        new products_model_1.ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                        new products_model_1.ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                        new products_model_1.ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                        new products_model_1.ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                        new products_model_1.ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization."),
                    ];
                }
                ProductSlides = __decorate([
                    core_1.Component({
                        selector: 'product-slides',
                        templateUrl: 'app/views/product.selector.slides.view.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSlides);
                return ProductSlides;
            }());
            exports_1("ProductSlides", ProductSlides);
        }
    }
});
//# sourceMappingURL=product.selector.slides.js.map