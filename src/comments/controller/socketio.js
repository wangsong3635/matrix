'use strict'

import Clients from '../model/Clients.js'


export default class extends think.controller.base {
	
	openAction(self) {

		console.log('find one socket connected...');
		var socket = self.http.socket;
	}

	closeAction(self) {
		var socket = self.http.socket;
		console.log('one socket close...');
	}
	addcourseAction(self) {

		console.log(' addCourse ...');
		var socket = self.http.socket;
		clients.addSocket(self.http.data.id, socket);
		console.log('****************************');
		console.log(self.http.data);
		console.log('****************************');
		this.emit('addsuccess', self.http.data);
	}

	commentsAction(self) {

		console.log(' comments ...');
		var socket = self.http.socket;
		console.log(self.http.data);
		this.emit('comments', self.http.data);
		clients.getSocket().emit('comments', self.http.data);
	}
}