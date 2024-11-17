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

function operate(firstOperand, operator, secondOperand) {
    let result = 0;
    switch (operator) {
        case '+': result = add(firstOperand, secondOperand);
        case '-': result = subtract(firstOperand, secondOperand);
        case '*': result = multiply(firstOperand, secondOperand);
        case '/': result = divide(firstOperand, secondOperand);
    }
    return result;
}
let firstOperand = 100;
let secondOperand = 80;
let operator = '+';

console.log(sum(100, 80));
console.log(subtract(100, 80));
console.log(multiply(100, 80));
console.log(divide(100, 80));

