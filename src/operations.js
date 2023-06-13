const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const calcNumbers = [one, two, three, four, five, six, seven, eight, nine];

const display = document.getElementById("number-display");

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const operators = [addButton, subtractButton, multiplyButton, divideButton]

const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let displayNumber = 0;

for (num of calcNumbers) {
    // the button's IDs correlate to their numerical value
    const value = Number.parseInt(num.id, 10);
    num.addEventListener('click', function() {
        if (displayNumber === 0) {
            displayNumber = value;
        } else {
            displayNumber = parseInt(displayNumber.toString() + value);
        }
        updateDisplay();
    });
}

clear.addEventListener('click', () => {
    displayNumber = 0;
    updateDisplay();
});

// Denotes which operator has been selected
// could cause issues down the line if it's value
// isn't set to the name of a valid operation
let currentOperation = undefined;

let firstOperand = 0;
let secondOperand = 0;

addButton.addEventListener('click', () => {
    currentOperation = "add";
    firstOperand = displayNumber;
    displayNumber = 0;
    updateDisplay();
});

subtractButton.addEventListener('click', () => {
    currentOperation = "subtract";
    firstOperand = displayNumber;
    displayNumber = 0;
    updateDisplay();
});

multiplyButton.addEventListener('click', () => {
    currentOperation = "multiply";
    firstOperand = displayNumber;
    displayNumber = 0;
    updateDisplay();
});

divideButton.addEventListener('click', () => {
    currentOperation = "divide";
    firstOperand = displayNumber;
    displayNumber = 0;
    updateDisplay();
});

equals.addEventListener('click', () => {
    secondOperand = displayNumber;
    if (currentOperation === "add") {
        displayNumber = firstOperand + secondOperand;
        
    }
    if (currentOperation === "subtract") { 
    }
    if (currentOperation === "multiply") {

    }
    if (currentOperation === "divide") {

    }
    switch (currentOperation) {
        case "add":
            displayNumber = firstOperand + secondOperand;
            break;
        case "subtract":
            displayNumber = firstOperand - secondOperand;
            break;
        case "multiply":
            displayNumber = firstOperand * secondOperand;
            break;
        case "divide":
            if (secondOperand === 0) { 
                alert("Error: cannot divide by zero!");
                break; 
            }
            displayNumber = firstOperand / secondOperand;
    }

    currentOperation = undefined;
    updateDisplay();
});

function updateDisplay() {
    display.innerHTML = displayNumber;
}