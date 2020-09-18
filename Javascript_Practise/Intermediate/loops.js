// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

console.log("\nFor Loop :\n");
for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] !== "string") continue;
  console.log(myStates[i]);
}

console.log("\nWhile Loop :\n");
let i=0;

while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

console.log("\nDo-While loop :\n");
i = 20;

do {
  console.log(i);
  i++;
} while (i < 10);
