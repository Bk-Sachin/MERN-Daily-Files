// alert("you sure");
// if (confirm("you sure")) {
//     console.log("this is my first class")
// }

// let  xyz=confirm("are you sure");
// console.log("this is my conformation", xyz);
// if (xyz==true) {
//     console.log("request accepted");
    
// } else {
//     console.log("request rejected");
// }

// let yourPrompt = prompt("enter your name");
// console.log("hello", yourPrompt);

const button = document.getElementById("myButton");
const demo = document.getElementById("demo");
button.addEventListener("click", function(){
  demo.textContent = "Good afternoon all!!";
})
