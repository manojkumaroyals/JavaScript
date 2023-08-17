( function(a,b){
	console.log("self invoke")
	return a+b;
}(3,4));
//sec type
( function(a,b){
	console.log("self invoke 2")
	return a+b;
})(7,8);