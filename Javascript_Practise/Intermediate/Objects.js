var user = {
  firstName: "Yogesh",
  lastName: "Singh",
  role: "Admin",
  loginCount: 12,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 34;
console.log(user.loginCount);

console.log(user);
console.table(user);
