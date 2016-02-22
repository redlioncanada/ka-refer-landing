import {Component} from 'angular2/core';
import {VideoPlayer} from './videoplayer.component';

@Component({
    selector: 'my-app',
    template: '<videoplayer></videoplayer>',
    directives: [VideoPlayer]
})
export class AppComponent { }