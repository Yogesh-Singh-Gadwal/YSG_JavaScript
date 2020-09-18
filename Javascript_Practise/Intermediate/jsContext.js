sayHello();

function sayHello() {
  console.log("Hello");
}

if (2 === "2") {
    console.log("This is true");
  }else{
    console.log("This is false");

  }
  
  var myName = "Yogesh";
  if (myName === myName) {
    console.log("This is again a true statement");
  }

  //code in browser - global context
  // if (myName === window.myName) {
  //   console.log("This is again a true statement");
  // }
  