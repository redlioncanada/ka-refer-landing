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
				"link": "http://kitchenaid.ca"
			},
			{
				"title": "Platinum Interior",
				"image": "./public/images/more-features-2.jpg",
				"link": "http://kitchenaid.ca"
			},
			{
				"title": "Three-Tier Freezer Drawer",
				"image": "./public/images/more-features-3.jpg",
				"link": "http://kitchenaid.ca"
			}
		]
	}
}