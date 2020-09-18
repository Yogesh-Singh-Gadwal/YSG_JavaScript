//Execution Context
//Funtion declarations are scanned and made available
//Variable declarations are scanned and made undefined 



tipper("80");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");

console.log(name);
var name = "Yogesh";

function sayName() {
  var name = "MR. YSG";
  console.log(name);
}
sayName();

console.log(name);
