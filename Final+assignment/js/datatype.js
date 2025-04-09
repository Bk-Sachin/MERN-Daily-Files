// Data Types
// - String
// Number  — integer, double, float
// Boolean
// null
// undefined  // in js only
// Object  {key:value}
// Array

let name1 = "John";
let age = "25 ";
let isMarried = false;

let fruit1 = {
  name: "Apple",
  price: 20,
  isFresh: true,
};
let fruit2 = [
  {
    name: "Apple",
    price: 10,
    isFresh: true,
  },
  {
    name: "banana",
    price: 5,
    isFresh: true,
  },
  {
    name: "cherry",
    price: 100,
    isFresh: true,
  },
];

console.log("datatype of name1 is:", typeof name1);
console.log("datatype of age is:", typeof age);
console.log("datatype of fruit1 is:", typeof fruit1);
console.log("datatype of fruit2 is:", typeof fruit2);
console.log("datatype of isMarried is:", typeof isMarried);

//spread operator

let fruit3 = [...fruit2, { name: "grapes", price: 50, isFresh: true }];
console.log("fruit3 is:", fruit3);

let xyz = [1, 2, 3];
let abc = [...xyz, 4, 5, 6];
console.log("abc is:", abc);

let students = ["ramesh", "dinesh", "kopila", "priya"];
let students1 = [...students, "suresh", "suresh", "sure"];
console.log("students1 is:", students1);

let user = [
  { name: "ramesh", email: "ramesh@gmail.com", password: "ramesh123" },
  { name: "priya", email: "priya@gmail.com", password: "priya123" },
  { name: "santosh", email: "santos@gmail.com", password: "santosh123" },
  { name: "ramesh", email: "ramesh@gmail.com", password: "ramesh123" },
  { name: "priya", email: "priya@gmail.com", password: "priya123" },
  { name: "santosh", email: "santos@gmail.com", password: "santosh123" },
];
let totalUser = user.length;
console.log("totalUser is:", totalUser);
