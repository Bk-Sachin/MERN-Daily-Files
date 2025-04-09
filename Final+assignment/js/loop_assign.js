// for loop
console.log('this is for loop')
for (let i = 2; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
  }

// using map
console.log('this is using map')
let number = []; 
let multiplicationTable = [];

for (let i = 2; i <= 10; i++) {
  number.push(i);
}

number.map((value) => {
  multiplicationTable.push(`2 x ${value} = ${2 * value}`);
});
console.log(multiplicationTable.join("\n"));


// using foreach
let num = [];
let tableOfTwo = [];

for (let i = 2; i <= 10; i++) {
  num.push(i);
}

num.forEach((n) => {
  tableOfTwo.push(`2 x ${n} = ${2 * n}`);
});

console.log(tableOfTwo.join("\n"));