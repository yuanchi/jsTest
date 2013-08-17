(function(host){
	var MyGlobal = function(){};
	//...other added functionality
	host.myGlobal = host.myGlobal || new MyGlobal();
})(this)