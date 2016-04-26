(function(){
	var Config = {
		baseUrl: '127.0.0.1:9360/',
		commentsUrl: '127.0.0.1:9360/comments/'
	}
	var mySocket = (function() {
		var socket = io(Config.baseUrl);

		console.log('connected...');
		//发送事件
		socket.emit("addcourse", {
			courseId: '123456'
		});
		//监听事件
		socket.on("addsuccess", function(data){
			console.log(data);
			myView.showTheUrl(data);
		});
		socket.on('comments', function(data) {
			console.log(data);
			myView.showComments(data);
		});
	})();

	var myView = (function() {
		var urlDiv = document.getElementById('ws-url');
		var commentsDiv = document.getElementById('ws-comments');

		var showTheUrl = function(id) {
			urlDiv.innerHTML = Config.commentsUrl + '?id=' + id;
		};
		var showComments = function(comments) {
			commentsDiv.innerHTML = comments;
		};

		return {
			showTheUrl: showTheUrl,
			showComments: showComments
		}
	})();
})();