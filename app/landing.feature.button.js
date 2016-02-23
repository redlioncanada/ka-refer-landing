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
                FeatureButton.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    //this is ugly, but the syntax of gsap restricts me from decoupling animations from their target element
                    //I could probably adjust timeline-controller to instantiate timelines without specifying a target element
                    //but just want to get it working for now
                    var target = $(this.rootElement).find('img');
                    var width = $(this.rootElement).find('img').parent().width();
                    var height = $(this.rootElement).find('img').parent().width();
                    switch (this.btnType) {
                        case "cart":
                            this.timeline.to(target, 0, { x: "-=" + width })
                                .to(target, 1, { ease: Power3.easeIn, x: "+=" + width })
                                .to(target, 0.2, { ease: Power1.easeOut, css: { transform: "rotate(5deg)" } }).add('stop')
                                .to(target, 0.1, { x: "+=" + 1 }, 'stop').add('backDown')
                                .to(target, 0.1, { x: "-=" + 1 }, 'backDown')
                                .to(target, 0.1, { ease: Power1.easeOut, css: { transform: "rotate(0deg)" } });
                            break;
                        case "star":
                            this.timeline.add('start').set({}, {}, 'start+=0.5')
                                .to(target, 0, { y: "-=" + height })
                                .to(target, 1, { ease: Bounce.easeOut, y: "+=" + height });
                            break;
                        case "magnifier":
                            this.timeline.add('start').set({}, {}, 'start+=0.8')
                                .to(target, 0, { opacity: 0, css: { transform: "scale(0.2)" } })
                                .to(target, 0.15, { ease: Power1.easeIn, opacity: 1, css: { transform: "scale(1)" } });
                            break;
                    }
                    setInterval(function () {
                        _this.restart();
                    }, 2000);
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