/****************************/
/*** Odin Calculator v1.1 ***/
/****************************/

// Add the storage variables for the calculator.
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let resetScreenController = false;

// Add the event listener constants.
const equalsButton = document.getElementById('equalsButton');
const clearButton = document.getElementById('clearButton');
const refreshButton = document.getElementById('refreshButton');
const pointButton = document.getElementById('pointButton');

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

// Add the constants to manage the operations screen.
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// Basic math functions.
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Operator function that calls the basic math functions.
function operate(operator, a, b) {
    // Sanitize the inputs.
    a = Number(a);
    b = Number(b);

    // Switch logic for operations.
    switch (operator) {
        case '+':
            return addition(a, b);
            break;
        case '-':
            return subtraction(a, b);
            break;
        case '*':
            return multiplication(a, b);
            break;
        case '/':
            return division(a, b);
            break;
        default:
            return null;
    }
}

// Utility functions.
function resetScreen() {
    currentOperationScreen.textContent = '';
    resetScreenController = false;
}

// Event listener functions that control the program.
function appendNewNumber(newNumber) {
    if (currentOperationScreen.textContent === '0' || resetScreenController) {
        resetScreen();
    }
    currentOperationScreen.textContent += newNumber;
}

function setOperator(operator) {
    if (currentOperator != null) {
        evaluateEquation();
    }
    firstOperand = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`
    resetScreenController = true;
}

function evaluateEquation() {
    if (currentOperator === null || resetScreenController) {
        return;
    }
    if (currentOperator === '/' && currentOperationScreen.textContent === '0') {
        alert('ERROR: Divide by zero');
        return;
    }
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = operate(currentOperator, firstOperand, secondOperand);
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
    currentOperator = null;
}

function clearScreen() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function appendDecimal() {
    if (resetScreenController) {
        resetScreen();
    }
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    }
    if (currentOperationScreen.textContent.includes('.')) {
        return;
    }
    currentOperationScreen.textContent += '.';
}

// Event listener controllers for button clicks.
numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNewNumber(button.textContent));
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent));
});

// Event listener controllers that call relevant functions.
equalsButton.addEventListener('click', evaluateEquation);
clearButton.addEventListener('click', clearScreen);
pointButton.addEventListener('click', appendDecimal);
