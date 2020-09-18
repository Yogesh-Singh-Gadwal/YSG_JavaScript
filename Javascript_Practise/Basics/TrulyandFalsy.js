//falsy values :

// undefined - empty variable
// null - had to be some value but no value came up
// 0
// '' - empty string
// NaN

var user = "2";


if (user) {
    console.log("Condition is true");
  }

  //type coercion
if (2 == user) {
  console.log("Condition is true");
}

//strict 
if (2 === user) {
    console.log("Condition is true");
  }

// console.log("2" + "2");
