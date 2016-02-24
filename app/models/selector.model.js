System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SelectorModel;
    return {
        setters:[],
        execute: function() {
            SelectorModel = (function () {
                function SelectorModel(slideNode, slideImg, slideTitle, slideDesc, slideLearn) {
                    this.slideNode = slideNode;
                    this.slideImg = slideImg;
                    this.slideTitle = slideTitle;
                    this.slideDesc = slideDesc;
                    this.slideLearn = slideLearn;
                }
                return SelectorModel;
            }());
            exports_1("SelectorModel", SelectorModel);
        }
    }
});
//# sourceMappingURL=selector.model.js.map