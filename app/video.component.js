System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './services/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, logger_service_1;
    var Video;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            Video = (function () {
                function Video(http, logger) {
                    this.http = http;
                    this.logger = logger;
                    this.http = http;
                    this.logger = logger;
                }
                Video.prototype.ngOnInit = function () {
                    var _this = this;
                    var params = {
                        id: this.id,
                        part: 'snippet',
                        key: 'AIzaSyB9daYpfuJEn6L6pNi69tPYeX75DxhonYE'
                    };
                    this.http.get(this.constructURL('https://googleapis.com/youtube/v3/videos', params))
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.initialize(data); }, function (err) { return _this.logger.error(err); });
                };
                Video.prototype.initialize = function (data) {
                    this.description = data.description.replace(/\\n/g, '');
                };
                Video.prototype.constructURL = function (url, params) {
                    var r = '';
                    for (var i in params) {
                        r += i + '=' + params[i] + '&';
                    }
                    return url + '?' + r;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Video.prototype, "id", void 0);
                Video = __decorate([
                    core_1.Component({
                        selector: 'video',
                        template: "\n\t\t<div>{{description}}</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, logger_service_1.Logger])
                ], Video);
                return Video;
            })();
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.component.js.map