System.register(['angular2/core', './landing.timeline-controller'], function(exports_1, context_1) {
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
    var core_1, landing_timeline_controller_1;
    var FeatureButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            }],
        execute: function() {
            FeatureButton = (function (_super) {
                __extends(FeatureButton, _super);
                function FeatureButton(elementRef) {
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                    _super.call(this);
                }
                FeatureButton.prototype.playAnimations = function (bType, targ) {
                    clearInterval(0);
                    switch (bType) {
                        case "cart":
                            TweenMax.to(this.target, 1, { delay: .5, left: 0, ease: Power3.easeOut });
                            TweenMax.to(this.target, 1, { delay: 1, left: 50, css: { transform: "rotate(5deg)" }, ease: Power3.easeOut });
                            TweenMax.to(this.target, .3, { delay: 1.5, css: { transform: "rotate(0deg)" }, ease: Bounce.easeOut });
                            TweenMax.to(this.target, 1, { delay: 6, left: 150, opacity: 0, ease: Power3.easeIn, onComplete: this.resetAnimations });
                            break;
                        case "star":
                            TweenMax.to(this.target, 1, { delay: 0, top: 0, ease: Bounce.easeOut });
                            TweenMax.to(this.target, 1, { delay: 6, top: 150, opacity: 0, ease: Power3.easeIn, onComplete: this.resetAnimations });
                            break;
                        case "magnifier":
                            TweenMax.to(this.target, 1, { delay: 0, css: { transform: "scale(1)" }, ease: Back.easeOut });
                            TweenMax.to(this.target, 1, { delay: 6, opacity: 0, css: { transform: "scale(5)" }, ease: Power3.easeIn });
                            break;
                    }
                };
                FeatureButton.prototype.resetAnimations = function (playIt) {
                    var _this = this;
                    switch (this.btnType) {
                        case "cart":
                            TweenMax.to(this.target, .1, { delay: 0, opacity: 1, left: -150, ease: Power3.easeOut });
                            break;
                        case "star":
                            TweenMax.to(this.target, .1, { delay: 0, opacity: 1, top: -150, ease: Power3.easeOut });
                            break;
                        case "magnifier":
                            TweenMax.to(this.target, .1, { delay: 0, opacity: 1, css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                            break;
                    }
                    setTimeout(function () {
                        playIt(_this.btnType);
                    }, 500);
                };
                FeatureButton.prototype.ngAfterViewInit = function () {
                    //this is ugly, but the syntax of gsap restricts me from decoupling animations from their target element
                    //I could probably adjust timeline-controller to instantiate timelines without specifying a target element
                    //but just want to get it working for now
                    //Not that ugly, but didn't hit the ask.
                    this.target = $(this.rootElement).find('img');
                    this.targetWidth = $(this.rootElement).find('img').parent().width();
                    this.targetHeight = $(this.rootElement).find('img').parent().height();
                    /* switch(this.btnType) {
                         case "cart":
                             this.timeline.to(target, 0, { left: "-="+width })
                                 .to(target, 1, { ease: Power4.easeOut, left: "+="+width })
                                 .to(target, 0.2, { ease: Power1.easeOut, css: {transform:"rotate(5deg)"} }).add('stop')
                                 .to(target, 0.1, { left: "+=" + 1 }, 'stop').add('backDown')
                                 .to(target, 0.1, { left: "-=" + 1 }, 'backDown')
                                 .to(target, 0.1, { ease: Power1.easeIn, css: {transform:"rotate(0deg)"} })
                             break;
                         case "star":
                             this.timeline.add('start').set({}, {}, 'start=2')
                                 .to(target, 0, { top: "-="+height })
                                 .to(target, 1, { ease: Bounce.easeOut, top: "+="+height })
                             break;
                         case "magnifier":
                             this.timeline.add('start').set({}, {}, 'start=3')
                                 .to(target, 0, { opacity: 0, css: { transform: "scale(0.2)" } })
                                 .to(target, .5
                                 , { ease: Back.easeOut, opacity: 1, css: {transform:"scale(1)"} })
                             break;
                     } */
                    //setInterval(() => {
                    //    this.restart()
                    // }, 10000)
                    this.resetAnimations(this.playAnimations);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnIcon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnRollOverCopy", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnRollOverCTA", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnLink", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnType", void 0);
                FeatureButton = __decorate([
                    core_1.Component({
                        selector: 'feature-button',
                        templateUrl: 'app/views/landing.feature.button.view.html',
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FeatureButton);
                return FeatureButton;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("FeatureButton", FeatureButton);
        }
    }
});
//# sourceMappingURL=landing.feature.button.js.map