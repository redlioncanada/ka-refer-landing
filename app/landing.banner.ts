import {Component, Input} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'

@Component({
    selector: 'banner',
    templateUrl: 'app/views/landing.banner.view.html',
    directives: [LearnMoreButton],
})
export class Banner {
	private link: string
	private image: string

	constructor() {
		this.link = 'http://kitchenaid.ca'
		this.image = './public/images/banner.jpg'
	}
}