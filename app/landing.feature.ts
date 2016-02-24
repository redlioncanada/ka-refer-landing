import {Component} from 'angular2/core'
import {FeatureButton} from './landing.feature.button'
import {FeatureModel} from './models/features.model'

@Component({
    selector: 'features',
    templateUrl: 'app/views/landing.feature.view.html',
	directives: [FeatureButton, FeatureModel],
    
})
export class Features {
    
    public featureButtons:[FeatureModel] = [
        new FeatureModel("./public/images/refer-landing-shopping-cart.png",
        				"Buying Guide",
        				"What to look for when you are buying",
        				"Click Here",
        				"http://kitchenaid.ca",
        				"cart"),
        new FeatureModel("./public/images/refer-landing-star.png",
        				"Ratings & Reviews",
        				"See what others are saying",
        				"Click Here",
        				"http://kitchenaid.ca",
        				"star"),
        new FeatureModel("./public/images/refer-landing-mag-glass.png",
        				"Find Your Kitchenaid",
        				"Need help finding your refrigerator",
        				"Click Here",
        				"http://kitchenaid.ca",
        				"magnifier")
    ];
}