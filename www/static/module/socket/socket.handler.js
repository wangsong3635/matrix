var sloth = (function(){
	var Config = {
		baseUrl: 'http://10.160.31.144:8080',
		commentsUrl: 'http://10.160.31.144:8080/comments/'
	};

	var mySocket = (function() {
		var socket = io(Config.baseUrl);

		console.log('connected...');
		//发送事件
		socket.emit("addcourse", {
			addcourse: 'yes'
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
		//准备页面元素
		var commentsDiv = document.getElementById('ws-comments');
		//定义二维码页面点击之后隐藏
		document.getElementsByClassName("first-page")[0].onclick = function(){
			this.parentNode.removeChild(this);
		};
		var get2CodeUrl = function(id) {
			var commentsUrl = Config.commentsUrl + '?id=' + id;
			var codeRequestUrl = 'http://api.wwei.cn/wwei.html?data=' + commentsUrl +'&&version=1.0&apikey=20160427138671&callback=sloth_show2code';
			var scriptNode = document.createElement('script');
			scriptNode.setAttribute('src', codeRequestUrl);
			document.body.appendChild(scriptNode);
		};

		var showComments = function(text){
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
		    };

		return {
			showTheUrl: get2CodeUrl,
			
			showComments: showComments
		}
	})();

})();

var sloth_show2code = function(data) {
	var ws_2code = document.getElementById('ws_2code');
	console.log(data);
	var imgUrl = data.data.qr_filepath;
	var imgNode = document.createElement('img');
	imgNode.setAttribute('src', imgUrl);
	ws_2code.appendChild(imgNode);
};