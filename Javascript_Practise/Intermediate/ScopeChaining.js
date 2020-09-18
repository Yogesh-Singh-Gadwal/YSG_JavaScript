var name = "Yogesh";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. YSG";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. Singh";
    console.log("Line number 12", name);
  }
}

sayName();
