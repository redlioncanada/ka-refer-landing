System.register(['angular2/core', './product.selector.slide', './models/products.model', './landing.timeline-controller', './landing.learn-more.button'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, product_selector_slide_1, products_model_1, landing_timeline_controller_1, landing_learn_more_button_1;
    var ProductSlides;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_selector_slide_1_1) {
                product_selector_slide_1 = product_selector_slide_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            },
            function (landing_learn_more_button_1_1) {
                landing_learn_more_button_1 = landing_learn_more_button_1_1;
            }],
        execute: function() {
            ProductSlides = (function (_super) {
                __extends(ProductSlides, _super);
                //
                function ProductSlides(elementRef) {
                    _super.call(this);
                    this.products = [
                        new products_model_1.ProductModel("./public/images/products/5-door.png", "5 door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "five-door"),
                        new products_model_1.ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "built-in"),
                        new products_model_1.ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "french-door"),
                        new products_model_1.ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "side-by-side"),
                        new products_model_1.ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "bottom-freezer"),
                        new products_model_1.ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "under-counter"),
                    ];
                    this.elementRef = elementRef;
                }
                ProductSlides.prototype.ngAfterViewInit = function () {
                    this.rootElement = $(this.elementRef.nativeElement);
                    this.fiveDoor = ($(this.rootElement).find('#five-door'));
                    this.fiveDoorImg = ($(this.fiveDoor).find('.rl-ka-lndng-fridge'));
                    this.fiveDoorTitle = ($(this.fiveDoor).find('.rl-ka-lndng-fridge-title'));
                    this.fiveDoorDesc = ($(this.fiveDoor).find('.rl-ka-lndng-fridge-desc'));
                    console.log(this.fiveDoorTitle);
                    //this.fiveDoor = ($(this.rootElement).find('#five-door').children('.rl-ka-lndng-fridge'));
                    //this.fiveDoorTitle = ($(this.rootElement).find('#five-door').children('.rl-ka-lndng-fridge-title'));
                    //this.fiveDoorDesc = ($(this.rootElement).find('#five-door').children('rl-ka-lndng-fridge-desc'));
                    TweenMax.to(this.fiveDoorImg, 0, { delay: 0, opacity: 0, top: 130, ease: Power3.easeOut });
                    TweenMax.to(this.fiveDoorTitle, 0, { delay: 0, opacity: 0, top: 130, ease: Power3.easeOut });
                    TweenMax.to(this.fiveDoorDesc, 0, { delay: 0, opacity: 0, top: 165, ease: Power3.easeOut });
                    //
                    TweenMax.to(this.fiveDoorImg, 2, { delay: 2.5, opacity: 1, top: 155, ease: Power3.easeOut });
                    TweenMax.to(this.fiveDoorTitle, 2, { delay: 3, opacity: 1, top: 170, ease: Power3.easeOut });
                    TweenMax.to(this.fiveDoorDesc, 2, { delay: 3.5, opacity: 1, top: 215, ease: Power3.easeOut });
                };
                ProductSlides = __decorate([
                    core_1.Component({
                        selector: 'product-slides',
                        templateUrl: 'app/views/product.selector.slides.view.html',
                        directives: [product_selector_slide_1.ProductSlide, landing_learn_more_button_1.LearnMoreButton]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ProductSlides);
                return ProductSlides;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("ProductSlides", ProductSlides);
        }
    }
});
//# sourceMappingURL=product.selector.slides.js.map