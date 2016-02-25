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
			id: '70cAsWGqbgU',
			thumb: './public/images/video-select-1.jpg',
			title: 'A revolutionary mark on a revolutionary new line',
			ctaTitle: 'Design',
			cta: 'Play Video',
			desc: false
		},
		{
			id: 'RxnPMBOUWfk',
			thumb: './public/images/video-select-2.jpg',
			title: 'A revolutionary mark on a revolutionary new line',
			ctaTitle: 'Food Care',
			cta: 'Play Video',
			desc: false
		},
		{
			id: 'XSu9pHc1GdA',
			thumb: './public/images/video-select-3.jpg',
			title: 'A revolutionary mark on a revolutionary new line',
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