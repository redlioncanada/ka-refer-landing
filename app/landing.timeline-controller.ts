/// <reference path="../typings/greensock/greensock.d.ts" />

export class TimelineController {
	protected timeline: TimelineMax

	constructor() {
		this.timeline = new TimelineMax()
	}
	start() {
		this.timeline.play()
	}

	pause() {
		this.timeline.pause()
	}

	restart() {
		this.timeline.seek(0)
		this.timeline.play()
	}

	reset() {
		this.timeline.seek(0)
	}
}