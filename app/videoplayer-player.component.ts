import {Component, Input} from 'angular2/core'
import {Logger} from './services/logger.service'
import {VideoPlayerVideo} from './videoplayer-video.component'

@Component({
	selector: 'videoplayer-player',
    templateUrl: 'app/views/videoplayer-player.view.html',
	directives: [VideoPlayerVideo]
})
export class VideoPlayerPlayer {
	@Input() data
	@Input() currentId

	constructor(private logger: Logger) {
	}
}