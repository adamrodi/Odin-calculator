let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = '0';

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
    else if (button.id === "clear") {
        button.addEventListener("click", () => {
            clear();
            updateDisplay();
        });
    }
    else if (button.id === "equals") {
        button.addEventListener("click", () => {
            equals();
            updateDisplay();
        });
    }
    else if (button.id === "decimal") {
        button.addEventListener("click", () => {
            inputDecimal();
            updateDisplay();
        });
    }
    else if (button.id === "percent") {
        button.addEventListener("click", () => {
            inputPercent();
            updateDisplay();
        });
    }
    else if (button.id === "sign") {
        button.addEventListener("click", () => {
            inputSign();
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
    else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        }
        else{
            displayValue += operand;
        }
    }
}

function inputOperator(op) {
    operator = op;
    firstOperand = displayValue;
    console.log(firstOperand + ' ' + operator);
}

function inputDecimal() {
    displayValue += '.';
}

function inputPercent() {
    displayValue = (displayValue / 100).toString();
}

function inputSign() {
    displayValue *= -1;
}

function updateDisplay() {
    // Convert to string if not already
    let displayString = displayValue.toString();
    // If number is too long
    if (displayString.length > 9) {
        if (displayString.includes('.')) {
            // For decimal numbers, truncate to 9 chars total
            displayString = parseFloat(displayString).toFixed(
                Math.max(0, 8 - displayString.indexOf('.'))
            );
        } else {
            // For integers, use exponential notation
            displayString = parseFloat(displayString).toExponential(3);
        }
    }
    
    // Update display
    display.innerText = displayString;
}

function clear() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = '0';
}

function equals() {
    secondOperand = displayValue;
    operate();
    displayValue = result;
    console.log(firstOperand + " " + operator + " " + secondOperand + " = " + result);
}

function operate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num2 === 0 ? 'Error' : num1 / num2; break;
        default: result = "Error"; break;
    }
}