import {Component} from 'angular2/core'
import {MoreFeaturesFeature} from './landing.morefeatures.feature'

@Component({
    selector: 'more-features',
    templateUrl: 'app/views/landing.morefeatures.view.html',
    directives: [MoreFeaturesFeature],
})
export class MoreFeatures {
	public moreFeatures
	public title

	constructor() {
		this.title = "More Fresh Features"
		this.moreFeatures = [
			{
				"title": "Measured Water Fill",
				"image": "./public/images/more-features-1.jpg",
				"link": "http://kitchenaid.ca",
				"text": "Displays and automatically dispenses water in ounces, cups, or liters.",
				"cta": ""
			},
			{
				"title": "Platinum Interior",
				"image": "./public/images/more-features-2.jpg",
				"link": "http://kitchenaid.ca",
				"text": "Provides a premium look with silver glossy walls that complement the metallic accents found inside the refrigerator.",
				"cta": ""
			},
			{
				"title": "Three-Tier Freezer Drawer",
				"image": "./public/images/more-features-3.jpg",
				"link": "http://kitchenaid.ca",
				"text": "Gives you easy access to frozen items with a three-level drawer, plus a divider in the lower basket to help you keep smaller items readily at hand.",
				"cta": ""
			}
		]
	}
}