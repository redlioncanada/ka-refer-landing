import {Component, Input} from 'angular2/core'
import {MoreFeaturesFeature} from './landing.morefeatures.feature'
import {AppData} from './services/appdata.service'
import {Logger} from './services/logger.service'

@Component({
	selector: 'test',
	template: `<more-features-feature></more-features-feature>`,
	directives: [MoreFeaturesFeature]
})
export class Test {
	@Input() title
	constructor(private appdata: AppData, private logger: Logger) {
		var data = appdata.get()
		this.title = data.morefeatures.title
		this.logger.log('Test')
	}
}