System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FeatureModel;
    return {
        setters:[],
        execute: function() {
            FeatureModel = (function () {
                function FeatureModel(btnIcon, btnTitle, btnRollOverCopy) {
                    if (btnIcon === void 0) { btnIcon = ""; }
                    if (btnTitle === void 0) { btnTitle = ""; }
                    if (btnRollOverCopy === void 0) { btnRollOverCopy = ""; }
                    this.btnIcon = btnIcon;
                    this.btnTitle = btnTitle;
                    this.btnRollOverCopy = btnRollOverCopy;
                }
                return FeatureModel;
            }());
            exports_1("FeatureModel", FeatureModel);
        }
    }
});
//# sourceMappingURL=features.model.js.map