'use strict'

let clients = new Map();
// console.log('clients constructor.......');
export default class Clients {

	addSocket(id, socket) {
		clients.set(id, socket);
	}

	deleteSocketById(id) {
		clients.delete(id);
	}
	deleteSocketBySocket(socket) {
		for(let [key, value] of clients.entries()) {
			if(value === socket) {
				clients.delete(key);
			}
		}
	}
	getSocket(id) {
		console.log('id: ' + id, typeof id);
		return clients.get(id);
	}

	isHasId(id) {
		return clients.has(id);
	}
}