function operate() {
    switch (operator) {
        case 'add': result = firstOperand + secondOperand;
        case 'subtract': result = firstOperand - secondOperand;
        case 'multiply': result = firstOperand * secondOperand;
        case 'divide': result = firstOperand / secondOperand;
    }
}
let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = '0';

console.log(add(100, 80));
console.log(subtract(100, 80));
console.log(multiply(100, 80));
console.log(divide(100, 80));


const display = document.getElementById('display');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const signButton = document.getElementById('sign');
const percentButton = document.getElementById('percent');
const decimalButton = document.getElementById('decimal');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    if (button.classList.contains("operand")) {
        button.addEventListener("click", () => {
            inputOperand(button.value)
            updateDisplay();
        });
    }
    else if (button.classList.contains("operator")) {
        button.addEventListener("click", () => {
            inputOperator(button.value);
            updateDisplay();
        });
    }
    else if(button.id === "clear") {
        button.addEventListener("click", () => {
            clear();
            updateDisplay();
        });
    }
})


function inputOperand(operand) {
    if (firstOperand === null) {
        if (displayValue === 0 || displayValue === '0') {
            displayValue = operand;
        }
        else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {

}

function updateDisplay() {
    if (displayValue.length < 9) {
        display.textContent = displayValue;
    }
    else {
        display.textContent = displayValue.substring(0, 9);
    }
}

function clear() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    operater = null;
    result = '0';
}