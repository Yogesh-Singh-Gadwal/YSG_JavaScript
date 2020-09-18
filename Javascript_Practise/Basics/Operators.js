// + - / * %

const num1 = 6;
const num2 = 3;

console.log("Sum : ",num1 + num2);

console.log("Difference : ",num1 - num2);

console.log("Multiplication : ",num1 * num2);

console.log("Division : ",num1 / num2);

console.log("Modulus / Reminder : ",num1 % num2);

console.log("result is  : ",num1 > num2);

var answer = num1 < num2;
console.log(answer);

console.log(typeof answer ); // typeof - operator which gives data type of given variable

console.log();



//Usecase finding discount

// D = (L - S)/L * 100

// Boadmass rules 
// a + b * c / d * e
// a +((b * c) / d) * e

var selligPrice = 199;
var listingPrice = 799;

var discount = ((listingPrice - selligPrice) / listingPrice) * 100;

console.log("Discount percentage is :" + discount);

displayDiscount = Math.round(discount);
console.log(displayDiscount + "%");