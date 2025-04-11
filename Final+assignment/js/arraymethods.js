// filter and find methods

// filter method in array
let numbers=[1,2,3,4]
let filterNumber = numbers.filter((number) => number<4)
console.log("array number less than 4 is: ", filterNumber);

// find methods
let numbers1=[2,3,4]
let findNumber = numbers1.find((number) => number<4)
console.log(findNumber);

let cartItems = [
    {
        name: "Ram",
        products:[
            {title: "laptop", price: 1000},
            {title: "mouse", price: 500},
            {title: "keyboard", price: 200},

        ],
    },
    {
        name: "Shyam",
        products:[
            {title: "laptop", price: 1050},
            {title: "mouse", price: 505},
            {title: "keyboard", price: 230},

        ],
    },
    {
        name: "Hari",
        products:[
            {title: "laptop", price: 5000},
            {title: "mouse", price: 50},
            {title: "keyboard", price: 2000},

        ],
    },
    {
        name: "Sita",
        products:[
            {title: "laptop", price: 3000},
            {title: "mouse", price: 5000},
            {title: "keyboard", price: 2000},

        ],
    },
    
];

cartItems.map((prod) =>{
    let total = prod.products.reduce((acc,curr) => acc + curr.price, 0);
    console.log(`${prod.name}, total expenditure is ${total}`);
});
// ternary operator (shortcut of ifelse)
let age = 25;
// if (age>18) {
//     console.log('you are adult');
// } else {
//     console.log("you are minor");
// }
console.log(age > 18 ? "you can vote" : "you cannot vote");

