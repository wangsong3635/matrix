'use strict'
export default class Clients {
	constructor() {
		this.clients = new Set();
	}

	addSocket(id, socket) {
		let client = new Map({id, socket});
		clients.add(client);
	}

	deleteSocket(id) {
		clients.forEach(function(client) {
			if(client.get('id') === id) {
				clients.delete(client);
			}
		})
	}

	getSocket(id) {
		clients.forEach(function(client) {
			if(client.get('id') === id) {
				return client.get('socket');
			}
		})
	}
}