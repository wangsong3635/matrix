'use strict'

import Clients from '../model/Clients.js'


export default class extends think.controller.base {

	init(http){
	    super.init(http); //调用父类的init方法  
	    this.clients = new Clients();
	  }
	
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
		this.clients.addSocket(self.http.data.courseId, socket);
		console.log('****************************');
		console.log(self.http.data);
		console.log('****************************');
		this.emit('addsuccess', self.http.data.courseId);
	}

	commentsAction(self) {

		console.log(' comments ...');
		var socket = self.http.socket;
		
		let client = this.clients.getSocket(self.http.data.courseId);
		this.emit('comments', self.http.data);
		client.emit('comments', self.http.data.content);
	}
}