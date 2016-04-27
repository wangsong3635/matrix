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
		if(self.http.data.addcourse === 'yes') {
			//时间戳+四位随机数生成courseId
			let courseId = new Date().getTime() + '' + Math.round(Math.random() * 10000);
			this.clients.addSocket(courseId, socket);
			this.emit('addsuccess', courseId);
		}
	}

	commentsAction(self) {

		console.log(' comments ...');
		var socket = self.http.socket;
		
		let client = this.clients.getSocket(self.http.data.courseId);
		this.emit('comments', self.http.data);
		client.emit('comments', self.http.data.content);
	}
}