import {Component} from 'angular2/core'
import {Video} from './video.component'

@Component({
    selector: 'video-player',
    template: `
		<li *ngFor="#videoId of videos">
			<video [id]="videoId"></video>
		</li>
	`,
	directives: [Video]
})
export class VideoPlayer {
	public videos: Array<string> = [
		'Cfa9z8qXkgQ',
		'Cfa9z8qXkgQ',
		'Cfa9z8qXkgQ'
	]
}