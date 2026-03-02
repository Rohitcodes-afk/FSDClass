
// function add(a,b){
//     return a+b;
// }

// function add(a,b){
//     return a-b;
// }

// function add(a,b){
//     return a*b;
// }

// function add(a,b){
//     return a/b;
// }

// const display = document.getElementById("output");



//  let a = Number(prompt("Enter first number:"));
//  const o = string(prompt("Enter operation (+, -, *, /):"));
//  let b = Number(prompt("Enter second number:"));
//  let result;




//     // switch (operation) {    
//     //     case "+": result = add(var1, var2); break;
//     //     case "-": result = subtract(var1, var2); break;
//     //     case "*": result = multiply(var1, var2); break;
//     //     case "/": result = divide(var1, var2); break;

//     // }

//     console.log("Result:", result);
//     display.innerHTML = result;


// // Run the logic
// calculate();

const box = document.createElement("div");

box.style.border = "5px solid black";
box.style.height = "100px";
box.style.width = "100px";
box.style.backgroundColor = "black";
box.style.margin = "10px";
box.style.animation = "mybox 0.01s linear infinite";

// Create style element for keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes mybox {
  50% { transform: rotate(-360deg);
  100         % { transform: rotate(360deg); }
}
`;

document.head.appendChild(style);
document.body.appendChild(box);



const curcle = document.createElement("div");

curcle.style.border="5px solid black"
curcle.style.height="100px";
curcle.style.width="100px";
curcle.style.borderRadius="50%"


document.body.appendChild(curcle);


const box1= document.createElement("div");


box1.style.border="5px solid black"
box1.style.height="100px";
box1.style.width="500px";
box1.style.color="black";

box1.style.margin="10px";

document.body.appendChild(box1);
