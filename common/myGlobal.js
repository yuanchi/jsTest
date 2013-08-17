(function(host){
	var MyGlobal = function(){};
	//...other added functionality
	host.myGlobal = host.myGlobal || new MyGlobal();
	alert('success');
})(this);
//nonblocking JavaScript download
(function(host){
	host.myGlobal.loadScript = function(url, callback){
		var script = document.createElement('script');
		script.type = 'text/javascript',
		readyState = script.readyState;
		
		if(readyState){// for IE
			script.onreadystatechange = function(){
				if(readyState == 'load' || readyState == 'complete'){
					script.onreadystatechange = null;
					callback();
				}
			}
		}else{
			script.onload = function(){
				callback();
			};
		}
		
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	};
})(this);