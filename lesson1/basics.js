var greeting = "Hello World";
console.log(greeting);

var random = Math.floor( Math.random() * 10);
console.log("Random: " + random);

function displayMessgae(msg){
  console.log(msg);
}

var arr = ["One", "Two", "Three"];
console.log("Element 0: " + arr[0]);
console.log("Element 2: " + arr[2]);

var obj = {first: "Brad", last: "Dayley"};
console.log("First: " + obj.first);
console.log("Last: " + obj.last);

// ^load os from node_modules
var os = require('os');
console.log("platform :" + os.platform());