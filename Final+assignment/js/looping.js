// for loop // map // forEach

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // =>0, 1, 2, 3, 4, 5, 6, 7, 8, 9

let oddNumber = [];
let evenNumber = [];
// using for loog

// for (let i = 0; i < num.length; i++) {
//   const element = num[i];
//   if (element % 2 === 0) {
//     evenNumber.push(element);
//   } else {
//     oddNumber.push(element);
//   }
// }
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// using map iterative method
number.map((value) => {
  if (value % 2 == 0) {
    evenNumber.push(value);
  } else {
    oddNumber.push(value);
  }
});
console.log("this is odd number", oddNumber);
console.log("this is even number", evenNumber);
//usign forEach iterative method

// num.forEach((n) => {
//   if (n % 2 == 0) {
//     evenNumber.push(n);
//   } else {
//     oddNumber.push(n);
//   }
// });
// console.log("this is odd number", oddNumber);
// console.log("this is even number", evenNumber);

// let students = ["ram", "shyam", "hari", "sanjaya", "prem"];
// console.log("total number of students", students.length);

// difference between map and for each