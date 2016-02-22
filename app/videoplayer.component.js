System.register(['angular2/core', './videoplayer-selector.component', './videoplayer-player.component', './services/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, videoplayer_selector_component_1, videoplayer_player_component_1, logger_service_1;
    var VideoPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (videoplayer_selector_component_1_1) {
                videoplayer_selector_component_1 = videoplayer_selector_component_1_1;
            },
            function (videoplayer_player_component_1_1) {
                videoplayer_player_component_1 = videoplayer_player_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            VideoPlayer = (function () {
                function VideoPlayer(logger) {
                    this.logger = logger;
                    this.title = "Designed To Inspire";
                    this.videos = [
                        {
                            id: '70cAsWGqbgU',
                            thumb: './images/video1.jpg',
                            title: 'Design',
                            cta: 'Play Video',
                            desc: false,
                            width: "100%",
                            height: "100%"
                        },
                        {
                            id: '70cAsWGqbgU',
                            thumb: './images/video2.jpg',
                            title: 'Food Care',
                            cta: 'Play Video',
                            desc: false,
                            width: "100%",
                            height: "100%"
                        },
                        {
                            id: '70cAsWGqbgU',
                            thumb: './images/video3.jpg',
                            title: '5-Door',
                            cta: 'Play Video',
                            desc: false,
                            width: "100%",
                            height: "100%"
                        }
                    ];
                    this.currentId = 0;
                }
                VideoPlayer.prototype.select = function (id) {
                    this.currentId = id;
                };
                VideoPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer',
                        template: "\n    \t<h4>{{title}}</h4>\n    \t<videoplayer-player [data]=\"videos\" [currentId]=\"currentId\"></videoplayer-player>\n\t\t<ul>\n\t\t\t<li *ngFor=\"#video of videos; #i=index\">\n\t\t\t\t<videoplayer-selector (selectedVideo)=\"select($event)\" [data]=\"video\" [id]=\"i\" [currentId]=\"currentId\"></videoplayer-selector>\n\t\t\t</li>\n\t\t</ul>\n\t",
                        directives: [videoplayer_player_component_1.VideoPlayerPlayer, videoplayer_selector_component_1.VideoPlayerSelector]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], VideoPlayer);
                return VideoPlayer;
            })();
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=videoplayer.component.js.map