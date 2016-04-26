'use strict'

export default {
	on: true,
	type: 'socket.io',
	allow_origin: '',
	adapter: undefined,
	path: '',
	messages: {
		open: 'comments/socketio/open',
		close: 'comments/socketio/close',
		addcourse: 'comments/socketio/addcourse',
		comments: 'comments/socketio/comments'
	}
}