//named function
function cal(a){
	return a*a;
}
console.log("calling named function" );
console.log(cal(3))

//anonymous function
 var anony=function(b){
 	return b*b;
}
console.log("caliing anonymous"+anony(4));

//constructor
var cons=new Function("a","return a*a;");
console.log("im anonymous"+cons(2));

//selfinvoked
(function (d){
	console.log("im self invoked"+(d*d));
	return d*d; 
}(7));
	   
  