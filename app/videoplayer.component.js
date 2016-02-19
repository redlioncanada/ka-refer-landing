System.register(['angular2/core', './video.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, video_component_1;
    var VideoPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_component_1_1) {
                video_component_1 = video_component_1_1;
            }],
        execute: function() {
            VideoPlayer = (function () {
                function VideoPlayer() {
                    this.videos = [
                        'Cfa9z8qXkgQ',
                        'Cfa9z8qXkgQ',
                        'Cfa9z8qXkgQ'
                    ];
                }
                VideoPlayer = __decorate([
                    core_1.Component({
                        selector: 'video-player',
                        template: "\n\t\t<li *ngFor=\"#videoId of videos\">\n\t\t\t<video [id]=\"videoId\"></video>\n\t\t</li>\n\t",
                        directives: [video_component_1.Video]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideoPlayer);
                return VideoPlayer;
            })();
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=videoplayer.component.js.map