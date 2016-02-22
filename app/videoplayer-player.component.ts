import {Component, Input} from 'angular2/core'
import {Logger} from './services/logger.service'
import {VideoPlayerVideo} from './videoplayer-video.component'
import { DOM } from 'angular2/src/platform/dom/dom_adapter';

@Component({
	selector: 'videoplayer-player',
    template: `
    	<div>
    		<ul>
    			<li *ngFor="#video of data; #i=index" class="{{currentId !== i ? 'hide' : 'show'}}">
    				<videoplayer-video [id]="video.id" [width]="video.width" [height]="video.height"></videoplayer-video>
    			</li>
    		</ul>
    		<div class="description">
    			{{data[currentId].desc}}
    		</div>
    	</div>
	`,
	directives: [VideoPlayerVideo]
})
export class VideoPlayerPlayer {
	@Input() data
	@Input() currentId

	constructor(private logger: Logger) {
	}
}