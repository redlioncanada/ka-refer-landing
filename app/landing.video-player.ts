import {Component} from 'angular2/core'
import {VideoPlayerSelector} from './landing.video-player.selector'
import {VideoPlayerPlayer} from './landing.video-player.player'
import {Logger} from './services/logger.service'

@Component({
    selector: 'videoplayer',
    templateUrl: 'app/views/landing.video-player.view.html',
	directives: [VideoPlayerPlayer, VideoPlayerSelector]
})
export class VideoPlayer {
	public title = "Designed To Inspire"
	public videos = [
		{
			id: '9IFIdkLo29Y',
			thumb: './public/images/video-select-1.jpg',
			title: 'A revolutionary Mark On A Revolutionary New Line | The KitchenAid<sup>&reg;</sup> Medallion',
			ctaTitle: 'Design',
			cta: 'Play Video',
			desc: false
		},
		{
			id: 'fWbEHxpUEwM',
			thumb: './public/images/video-select-2.jpg',
			title: 'KitchenAid<sup>&reg;</sup> Preserva<sup>&reg;</sup> Food Care System',
			ctaTitle: 'Food Care',
			cta: 'Play Video',
			desc: false
		},
		{
			id: 'RxnPMBOUWfk',
			thumb: './public/images/video-select-3.jpg',
			title: 'Revolutionary Five-Door Refrigerator | KitchenAid<sup>&reg;</sup>',
			ctaTitle: '5-Door',
			cta: 'Play Video',
			desc: false
		}
	]
	public currentId = 0

	constructor(private logger: Logger) {
	}

	select(id) {
		this.currentId = id
	}
}