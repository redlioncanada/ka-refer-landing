System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var AppData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppData = (function () {
                function AppData(logger) {
                    this.logger = logger;
                    this.init = false;
                    this.language = 'fr';
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead.jpg",
                            title: "Refrigerators"
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.kitchenaid.ca/en_CA/new/',
                            image: './public/images/banner.jpg'
                        },
                        features: {
                            enabled: true,
                            features: [
                                //       {
                                //       	image: "./public/images/refer-landing-shopping-cart.png",
                                //           title: "Buying Guide",
                                //           desc: "What to look for when you are buying",
                                //           cta: "Click Here",
                                //           link: "http://kitchenaid.ca",
                                //           type: "cart"
                                // },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Ratings & Reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html",
                                    type: "star"
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Find Your Kitchenaid",
                                    desc: "Need help finding your refrigerator?",
                                    cta: "Click Here",
                                    link: "http://findmy.kitchenaid.ca/#/question/Appliance",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "More Fresh Features",
                            features: [
                                {
                                    title: "Measured Water Fill",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "http://kitchenaid.ca",
                                    text: "Displays and automatically dispenses water in ounces, cups, or liters.",
                                    cta: ""
                                },
                                {
                                    title: "Platinum Interior",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "http://kitchenaid.ca",
                                    text: "Provides a premium look with silver glossy walls that complement the metallic accents found inside the refrigerator.",
                                    cta: ""
                                },
                                {
                                    title: "Three-Tier Freezer Drawer",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://kitchenaid.ca",
                                    text: "Gives you easy access to frozen items with a three-level drawer, plus a divider in the lower basket to help you keep smaller items readily at hand.",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Designed To Inspire",
                            videos: [
                                {
                                    id: '9IFIdkLo29Y',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Design: A revolutionary Mark On A Revolutionary New Line',
                                    ctaTitle: 'Design',
                                    cta: 'Play Video',
                                    desc: false
                                },
                                {
                                    id: 'fWbEHxpUEwM',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Food Care: KitchenAid<sup>&reg;</sup> Preserva<sup>&reg;</sup> Food Care System',
                                    ctaTitle: 'Food Care',
                                    cta: 'Play Video',
                                    desc: false
                                },
                                {
                                    id: 'RxnPMBOUWfk',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: '5-Door: Revolutionary Five-Door Refrigerator',
                                    ctaTitle: '5-Door',
                                    cta: 'Play Video',
                                    desc: false
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            nav: {
                                text: 'See All',
                                link: 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/'
                            },
                            products: [
                                {
                                    image: "./public/images/products/5-door.png",
                                    title: "5-door",
                                    desc: "The revolutionary, first-ever 5-Door freestanding refrigerator is designed for optimal organization and food freshness. Learn more about our versatile soft-close drawers, designed to help keep your favourite foods visible and easy to reach.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000817/",
                                    id: "five-door"
                                },
                                {
                                    image: "./public/images/products/built-in.png",
                                    title: "Built-in",
                                    desc: "When you picture your dream kitchen, you can bet our Built-in Refrigerator goes with it. Designed to fit your kitchen seamlessly, our panel ready options sold separately provide a sleek, premium look to complement your cabinets.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000258/",
                                    id: "built-in"
                                },
                                {
                                    image: "./public/images/products/french-door.png",
                                    title: "French Door",
                                    desc: "Need to get organized? Our French Door Refrigerators provide excellent space and organizing options for your culinary needs. With features like the humidity-controlled crispers, pantry drawer, and tiered drawer freezers, French Door Refrigerators are a contemporary fit for any kitchen.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000377/",
                                    id: "french-door"
                                },
                                {
                                    image: "./public/images/products/side-by-side.png",
                                    title: "Side-By-Side",
                                    desc: "The clean, timeless design of our Side-by-Side Refrigerators gives you eye-level access to both refrigerator and freezer, while keeping the ingredients you use most often fresh and at your fingertips.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000379/",
                                    id: "side-by-side"
                                },
                                {
                                    image: "./public/images/products/bottom-freezer.png",
                                    title: "Bottom Freezer",
                                    desc: "Beautifully designed, inside and out. Our Bottom Freezer Refrigerators are made to give you easy access to your favourite foods. They also feature humidity-controlled crispers that create the perfect environment for keeping ingredients fresh.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000376/",
                                    id: "bottom-freezer"
                                },
                                {
                                    image: "./public/images/products/under-counter.png",
                                    title: "Under Counter",
                                    desc: "Looking for a great addition to your kitchen? Our wide selection of Undercounter Refrigerators, Wine Cellars, and Ice Makers are a must have for entertaining, or providing another way to keep your beverages at the perfect temperature at all times.",
                                    link: "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/",
                                    id: "under-counter"
                                }
                            ]
                        }
                    };
                    this.contents.fr = {};
                }
                AppData.prototype.get = function () {
                    if (this.language !== 'en') {
                        if (!(this.language in this.contents)) {
                            this.logger.error('Language does not exist');
                        }
                        if (!this.init) {
                            this.contents[this.language] = this.mergeObject(this.contents.en, this.contents[this.language]);
                        }
                    }
                    this.init = true;
                    console.log(this.contents[this.language]);
                    return this.contents[this.language];
                };
                AppData.prototype.mergeObject = function (obj1, obj2) {
                    for (var p in obj2) {
                        try {
                            // Property in destination object set; update its value.
                            if (obj2[p].constructor == Object) {
                                obj1[p] = MergeRecursive(obj1[p], obj2[p]);
                            }
                            else {
                                obj1[p] = obj2[p];
                            }
                        }
                        catch (e) {
                            // Property in destination object not set; create it and set its value.
                            obj1[p] = obj2[p];
                        }
                    }
                    return obj1;
                };
                AppData = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], AppData);
                return AppData;
            }());
            exports_1("AppData", AppData);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map