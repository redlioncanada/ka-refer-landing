System.register(['angular2/core', './product.selector.slide', './landing.timeline-controller'], function(exports_1, context_1) {
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
    var core_1, product_selector_slide_1, landing_timeline_controller_1;
    var ProductSlides;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_selector_slide_1_1) {
                product_selector_slide_1 = product_selector_slide_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            }],
        execute: function() {
            ProductSlides = (function (_super) {
                __extends(ProductSlides, _super);
                function ProductSlides(elementRef) {
                    _super.call(this);
                    this.isAnimating = new core_1.EventEmitter();
                    this.elementRef = elementRef;
                    this.animating = false;
                }
                Object.defineProperty(ProductSlides.prototype, "animating", {
                    set: function (a) {
                        if (this._animating != a) {
                            this._animating = a;
                            this.isAnimating.emit(a);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ProductSlides.prototype.ngAfterViewInit = function () {
                    this.rootElement = $(this.elementRef.nativeElement);
                    // var target = $(this.rootElement).find('#five-door');
                    var target = this.selectedProduct.prodId;
                    this.playIn(this, true, target);
                };
                ProductSlides.prototype.ngOnChanges = function (changes) {
                    var self = this;
                    if ("selectedProduct" in changes && !this.animating) {
                        console.log('product.selector.slides current:', changes.selectedProduct.currentValue);
                        console.log('product.selector.slides previous:', changes.selectedProduct.previousValue);
                        this.playOut(changes.selectedProduct.previousValue.prodId, function () {
                            self.playIn(self, false, changes.selectedProduct.currentValue.prodId);
                        });
                    }
                };
                ProductSlides.prototype.playOut = function (target, cb) {
                    console.log('playOut');
                    var self = this;
                    console.log('#' + target);
                    target = $(this.rootElement).find('#' + target);
                    var image = ($(target).find('.rl-ka-lndng-fridge'));
                    var title = ($(target).find('.rl-ka-lndng-fridge-title'));
                    var desc = ($(target).find('.rl-ka-lndng-fridge-desc'));
                    var learn = ($(target).find('learn-more-button'));
                    this.animating = true;
                    TweenMax.to(image, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(title, .3, { delay: 0.1, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(desc, .3, { delay: 0.2, opacity: 0, ease: Power3.easeOut });
                    TweenMax.to(learn, .3, { delay: 0.3, opacity: 0, ease: Power3.easeOut, onComplete: function () {
                            TweenMax.to(target, 0, { delay: 0, opacity: 0 });
                            console.log('playOut done');
                            cb();
                        } });
                };
                ProductSlides.prototype.playIn = function (self, delay, target) {
                    if (delay === void 0) { delay = true; }
                    console.log('playIn');
                    if (!self)
                        self = this;
                    console.log('#' + target);
                    target = $(self.rootElement).find('#' + target);
                    var image = ($(target).find('.rl-ka-lndng-fridge'));
                    var title = ($(target).find('.rl-ka-lndng-fridge-title'));
                    var desc = ($(target).find('.rl-ka-lndng-fridge-desc'));
                    var learn = ($(target).find('learn-more-button'));
                    TweenMax.to(image, 0, { delay: 0, top: 130 });
                    TweenMax.to(title, 0, { delay: 0, top: 130 });
                    TweenMax.to(desc, 0, { delay: 0, top: 165 });
                    if ($(window).innerWidth() < 686) {
                        TweenMax.to(learn, 0, { delay: 0, top: 450 });
                    }
                    else {
                        TweenMax.to(learn, 0, { delay: 0, top: 410 });
                    }
                    TweenMax.to(target, 0, { delay: 0.1, opacity: 1 });
                    //
                    if (delay) {
                        TweenMax.to(image, 1.5, { delay: 2.5, top: 155, opacity: 1, ease: Power1.easeOut });
                        TweenMax.to(title, 1.5, { delay: 2.7, top: 170, opacity: 1, ease: Power1.easeOut });
                        TweenMax.to(desc, 1.5, { delay: 2.9, top: 215, opacity: 1, ease: Power1.easeOut });
                        if ($(window).innerWidth() < 686) {
                            TweenMax.to(learn, 1.5, { delay: 2.9, top: 500, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    console.log('playIn done');
                                    self.animating = false;
                                } });
                        }
                        else {
                            TweenMax.to(learn, 1.5, { delay: 2.9, top: 465, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    console.log('playIn done');
                                    self.animating = false;
                                } });
                        }
                    }
                    else {
                        TweenMax.to(image, 1.5, { delay: .5, top: 155, opacity: 1, ease: Power1.easeOut });
                        TweenMax.to(title, 1.5, { delay: 0.7, top: 170, opacity: 1, ease: Power1.easeOut });
                        TweenMax.to(desc, 1.5, { delay: 0.9, top: 215, opacity: 1, ease: Power1.easeOut });
                        if ($(window).innerWidth() < 686) {
                            TweenMax.to(learn, 1.5, { delay: 0.9, top: 500, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    console.log('playIn done');
                                    self.animating = false;
                                } });
                        }
                        else {
                            TweenMax.to(learn, 1.5, { delay: 0.9, top: 465, opacity: 1, ease: Power1.easeOut, onComplete: function () {
                                    console.log('playIn done');
                                    self.animating = false;
                                } });
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "products", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "selectedProduct", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductSlides.prototype, "isAnimating", void 0);
                ProductSlides = __decorate([
                    core_1.Component({
                        selector: 'product-slides',
                        templateUrl: 'app/views/product.selector.slides.view.html',
                        directives: [product_selector_slide_1.ProductSlide]
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