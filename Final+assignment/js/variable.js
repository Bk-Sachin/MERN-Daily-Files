//variable declaration (var , let, const)

//type var (has global scope)
// var x = 30;

// {
//   var x = 50;
//   console.log("value of block x:", x);
// }
// console.log("sum of x and y is: ", x);

//let (has block scope)
let a = 10;
let b = 20;
{
  let a = 30;
  console.log("value of block a is:", a);
}
console.log("value of global a is:", a);

// console.log("sum of a and b is: ", a + b);

//const (has block scope)
const c = 10;
const d = 20;
{
  const c = 30;
  console.log("value of block c is:", c);
}
console.log("sum of c is: ", c);
// console.log("sum of c and d is: ", c - d);
