///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {Component} from 'angular2/core';

import {VideoPlayer} from './videoplayer.component';
import {AppMasthead} from './landing.masthead';
import {Features} from './landing.feature';
import {ProductSelector} from './product.selector'


@Component({
    selector: 'rl-ka-refer-landing',
    templateUrl: 'app/views/app.view.html',
    directives: [VideoPlayer, AppMasthead, Features, ProductSelector]
})
class AppComponent { }

bootstrap(AppComponent, [HTTP_PROVIDERS, Logger, GoogleApi])