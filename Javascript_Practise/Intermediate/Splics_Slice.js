
var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
//slice(start,end) -start is inclusive , end is exclusive
console.log(users.slice(1,3));
console.log(users.slice(1));
console.log(users.slice(users.length-2));

// users.splice()
// console.log(users);

users.splice(1, 3, "HI", "BYE");
console.log(users);
//splice(start,range,sring to replace)
// splice is changing users array elements

users.splice(0, 2, "welcome", "Thank you","come back");
console.log(users);

