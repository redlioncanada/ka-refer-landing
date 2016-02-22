import {Component, Input} from 'angular2/core'
import {Logger} from './services/logger.service'

@Component({
	selector: 'videoplayer-video',
    template: `
    	<iframe id="{{id}}" src="http://www.youtube.com/embed/{{id}}?enablejsapi=1" width="944" height="531" allowfullscreen frameborder="0"></iframe>
	`
})
export class VideoPlayerVideo {
	@Input() id: string
	public player
	public ready: boolean
	private playerDOM

	constructor(private logger: Logger) {
		this.ready = false
	}

	ngOnInit() {
		let self = this
		this.player = new YT.Player(this.id, {
			events: {
				"onReady": function() {
					self._onReady(self)
				}
			}
		})
	}

	_onReady(self) {
		//need to pass a ref to `this` since this is a callback on YT.Player
		self.ready = true
		self.logger.log(`${this.id} ready`)
		console.log(self.player)
		self.play(self)
		setTimeout(() => {
			self.pause()
		}, 5000)
	}

	play(self) {
		if (!self) self = this
		if (!self.ready) return
		self.player.playVideo()
	}

	pause(self) {
		if (!self) self = this
		if (!self.ready) return
		self.player.pauseVideo()
	}
}