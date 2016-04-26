'use strict';

import Base from './base.js';
var servers = new Map();
export default class extends Base {

  /**
   * WebSocket 建立连接时处理
   * @param  {} self []
   * @return {}      []
   */
  openAction(self) {
    console.log("open success");
    var socket = self.http.socket;

    console.log(self.http.data);
    // var roomId = self.http.data.roomId;
    // servers.set(roomId, socket);
    // console.log(servers.get(roomId));
    //
    // console.log(servers.size);
    // this.broadcast("new message", {
    //   username: socket.username,
    //   message: self.http.data
    // });
  }

  closeAction() {
    console.log("close");
  }

  createroomAction(self) {
    var socket = self.http.socket;
    var roomId = self.http.data;

    servers.set(roomId, socket);
    console.log(servers.size);
  }

  commitAction(self) {
    var roomId = self.http.data.roomId;
    var content = selt.http.data.content;
    var socket = servers.get(roomId);

    socket.emit("receive", content);
    console.log("log" + self.http.data);
  }
}
