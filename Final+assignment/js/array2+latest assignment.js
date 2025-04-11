const students=[
    {name:"ramesh", paidsStatus: true, scholarship:false},
    {name:"Suresh", paidsStatus: false, scholarship:true},
    {name:"Rajesh", paidsStatus: false, scholarship:false},
    {name:"Rahul", paidsStatus: true, scholarship:true},
    {name:"Rohan", paidsStatus: false, scholarship:false},
]

// suing for Each

let cartItems1 = [
    {
      name: "Ram",
      products: [
        {
          title: "Iphone",
          models: [
            {
              color: "red",
              price: 5000,
            },
            {
              color: "yello",
              price: 6000,
            },
            {
              color: "black",
              price: 7000,
            },
          ],
        },
        { title: "mouse", price: 50 },
        { title: "keyboard", price: 200 },
      ],
    },
    {
      name: "Shyan",
      products: [
        { title: "labtop", price: 100 },
        { title: "mouse", price: 40 },
        { title: "keyboard", price: 20 },
      ],
    },
    {
      name: "Sita",
      products: [
        { title: "labtop", price: 1050 },
        { title: "mouse", price: 50 },
        { title: "keyboard", price: 200 },
      ],
    },
    {
      name: "Gita",
      products: [
        { title: "labtop", price: 200 },
        { title: "mouse", price: 50 },
        { title: "keyboard", price: 200 },
      ],
    },
    {
      name: "Prem",
      products: [
        { title: "labtop", price: 200 },
        { title: "mouse", price: 50 },
        { title: "keyboard", price: 200 },
      ],
    },
  ];


  // cartItems1.map((p) =>{
  //   p.products.models.map((m) => {
  //     console.log(`total available colors in iphone series ${m.color}`)
  //   })
    
  // });
  cartItems1.map((p) => {
    p.products.map((product) => {
      if (product.models) {
        product.models.map((model) => {
          console.log(`available colors in iPhone series: ${model.color} for ${model.price}`);
        });
      }
    });
  });

  let cartItems2=[
    {
      name: "aple",
      price: 100,
      quantity:2,
    },
    {
      name: "mango",
      price: 10,
      quantity:5,
    },
    {
      name: "Banana",
      price: 10,
      quantity:3,
    },
    {
      name: "Grapes",
      price: 100,
      quantity:2,
    },
    {
      name: "straberry",
      price: 50,
      quantity:2,
    },
  ];

  // const total = cartItems2.reduce((acc, curr)=> acc + curr.quantiry,0);
  // console.log("total of cartitems2 is :", total);

// using slice to take only some pary of array
const total = cartItems2.slice(0, 2).reduce((acc, curr)=> acc + curr.quantiry,0);
  console.log("total of cartitems2 is :", total);

  // push and pop
  let number = [1,2,3,4,5,6,7,8,9,10]
  let popNumber= number.pop();
  console.log(number);

  let num1= [ 1,2,3,4,5];
  let pushNum= num1.push(6,7,8);
  console.log(num1);

  // shift
let num2 = [1,2,3,4,5];
let shiftNum = num2.shift();
console.log(num2);

// unshift
let num3 = [1,2,3,4,5];let unshiftNum = num3.unshift(6,7,8);
console.log(num3);

// assignment explore array methods  splice , indexOf , findIndex, includes, 