import {Component} from 'angular2/core';
import {VideoPlayer} from './videoplayer.component';

@Component({
    selector: 'my-app',
    template: '<video-player></video-player>',
    directives: [VideoPlayer]
})
export class AppComponent { }