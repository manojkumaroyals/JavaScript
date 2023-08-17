var anon=function(a,b){
	console.log("anonymous fun is called");
	return a+b;
}
anon(5,6);
setTimeout(function(){console.log("anaony fun called after 3000ms")},3000);