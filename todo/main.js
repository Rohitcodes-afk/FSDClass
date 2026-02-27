function sub(a, b) {
    console.log(a/b);
    
    return a / b;

}

var a = Number(prompt("Enter value of a"));
var b = Number(prompt("Enter value of b"));
let outputvalue = sub(a, b);


const outputt = document.getElementById("output");
outputt.innerHTML = outputvalue;


