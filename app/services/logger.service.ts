
import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {
	log(s: string) {
		console.log(s)
	}

	error(s: string) {
		console.error(s)
	}
}