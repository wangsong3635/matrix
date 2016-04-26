(function(){
	var Config = {
		baseUrl: '127.0.0.1:8080/',
		commentsUrl: '127.0.0.1:8080/comments/'
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
		// var showComments = function(comments) {
		// 	commentsDiv.innerHTML = comments;
		// 	commentsDiv.setAttribute('class', 'words');
		// 	setTimeout(hideComments, 8000);
		// };

		var word = function(text){
		      this.content = text;
		      this.node = document.createElement("span");
		      this.draw = function(){
		        this.node.style.color = "rgba(250,250,250,0.8)";
		        this.node.style.position = "absolute";
		        this.node.style.top = (Math.random()*450+10)+"px";
		       //  this.node.style.cssText = "-webkit-animation:mymove 8s";
		        this.node.className = "words";
		        this.node.innerHTML = text;
		        
		        commentsDiv.appendChild(this.node);
		      };
		      this.draw();
		      this.node.addEventListener("webkitAnimationEnd",function(){
		        this.parentNode.removeChild(this);
		      });
		    }

		var hideComments = function() {
			commentsDiv.setAttribute('class', 'hide');
		}

		return {
			showTheUrl: showTheUrl,
			showComments: word
		}
	})();
})();