var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

console.log(states[1]);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

var user = ["yogesh", "ysg.email", 3, 25, true];
console.log(user);

user.pop();
user.pop();
console.log(user);

user.unshift("NEW VALUE");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("newyy")); // gives -1 explaining element is absent 

console.log(Array.from("hello"));
