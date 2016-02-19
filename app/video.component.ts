import {Component, Input} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import 'rxjs/Rx'
import {Logger} from './services/logger.service'

@Component({
	selector: 'video',
    template: `
		<div>{{description}}</div>
	`
})
export class Video {
	@Input() id: string
	description: string

	constructor(private http: Http, private logger: Logger) {
		this.http = http
		this.logger = logger
	}

	ngOnInit() {
		var params = {
			id: this.id,
			part: 'snippet',
			key: 'AIzaSyB9daYpfuJEn6L6pNi69tPYeX75DxhonYE'
		}

		this.http.get(this.constructURL('https://googleapis.com/youtube/v3/videos', params))
			.map((res: Response) => res.json())
			.subscribe(
				data => { this.initialize(data) },
				err => this.logger.error(err)
			)
	}

	initialize(data) {
		this.description = data.description.replace(/\\n/g, '');
	}

	constructURL(url,params) {
		var r: string = '';
		for (var i in params) {
			r += i + '=' + params[i] + '&'
		}
		return url+'?'+r
	}
}