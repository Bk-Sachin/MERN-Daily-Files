let students = [
    {name: 'John', age:20, mark:30},
    {name: 'Anna', age:25, mark:40},
    {name: 'Peter', age:24, mark:50},
    {name: 'Jack', age:23, mark:60},
    {name: 'Jane', age:21, mark:70},
];
// console.log(students[1]);

// students.map((e)=>{
    // console.log(e.name);
    // console.log(e.age);
    // console.log(e.mark);
    // console.log(`${e.name} is ${e.age} years old and he obtained ${e.mark} mark on mern stack course`); // template literal
// });

// === checks strictly the data type 
// == doesnot checks strictly


let a = 5
console.log(a == "5");
console.log(null === undefined);

// use all three loops and calcualte the multiplication table of 2 upto 10 :assignment output in template leteral

let cart = [
    {
        qty:3,
        price:10
    },
    {
        qty:2,
        price:20
    },
    {
        qty:1,
        price:30
    },
]

const total = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0);
// const total= cart.reduce((a,x)=>
//     {
//     return a + x.qty * x.price;
// });

console.log(total);