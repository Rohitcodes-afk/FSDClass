// 1. Define distinct functions for each operation
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

// 2. Get the HTML element once
const display = document.getElementById("output");

// 3. Helper function to run the calculation
function calculate() {
    const var1 = Number(prompt("Enter first number:"));
    const var2 = Number(prompt("Enter second number:"));
    const operation = prompt("Enter operation (+, -, *, /):");

    let result;

    

    switch (operation) {    
        case "+": result = add(var1, var2); break;
        case "-": result = subtract(var1, var2); break;
        case "*": result = multiply(var1, var2); break;
        case "/": result = divide(var1, var2); break;
        default: result = "Invalid Operation";
    }

    console.log("Result:", result);
    display.innerHTML = result;
}

// Run the logic
calculate();