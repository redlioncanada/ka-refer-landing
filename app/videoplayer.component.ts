import {Component} from 'angular2/core'
import {VideoPlayerSelector} from './videoplayer-selector.component'
import {VideoPlayerPlayer} from './videoplayer-player.component'
import {Logger} from './services/logger.service'

@Component({
    selector: 'videoplayer',
    template: `
    	<h4>{{title}}</h4>
    	<videoplayer-player [data]="videos" [currentId]="currentId"></videoplayer-player>
		<ul>
			<li *ngFor="#video of videos; #i=index">
				<videoplayer-selector (selectedVideo)="select($event)" [data]="video" [id]="i" [currentId]="currentId"></videoplayer-selector>
			</li>
		</ul>
	`,
	directives: [VideoPlayerPlayer, VideoPlayerSelector]
})
export class VideoPlayer {
	public title = "Designed To Inspire"
	public videos = [
		{
			id: '70cAsWGqbgU',
			thumb: './images/video1.jpg',
			title: 'Design',
			cta: 'Play Video',
			desc: false,
			width: "100%",
			height: "100%"
		},
		{
			id: '70cAsWGqbgU',
			thumb: './images/video2.jpg',
			title: 'Food Care',
			cta: 'Play Video',
			desc: false,
			width: "100%",
			height: "100%"
		},
		{
			id: '70cAsWGqbgU',
			thumb: './images/video3.jpg',
			title: '5-Door',
			cta: 'Play Video',
			desc: false,
			width: "100%",
			height: "100%"
		}
	]
	public currentId = 0

	constructor(private logger: Logger) {
	}

	select(id) {
		this.currentId = id
	}
}