import {Component} from 'angular2/core'
import {FeatureButton} from './landing.feature.button'

@Component({
    selector: 'features',
    templateUrl: 'app/views/landing.feature.view.html',
	directives: [FeatureButton]
})
export class Features {
	
}