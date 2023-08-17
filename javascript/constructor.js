var addFunc=new Function("a","b","console.log('in constructor function');return a+b;"); 
console.log(addFunc(2,4));