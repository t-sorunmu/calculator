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

let operand1 = 0;
let operand2 = 0;

addButton.addEventListener('click', () => {
    operand1 = displayNumber;
    displayNumber = 0;
    updateDisplay();
});

equals.addEventListener('click', () => {
    operand2 = displayNumber;
    displayNumber = add(operand1, operand2);
    updateDisplay();
});



function updateDisplay() {
    display.innerHTML = displayNumber;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}