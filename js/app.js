/****************************/
/*** Odin Calculator v1.1 ***/
/****************************/

// Add the storage variables for the calculator.
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

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

// Event listener controllers that call relevant functions.
equalsButton.addEventListener('click', /* Evaluate Function */);
clearButton.addEventListener('click', /* Clear Function */);
refreshButton.addEventListener('click', /* Refresh Function */);
pointButton.addEventListener('click', /* Append Decimal Function */);

// Event listener controllers for button clicks.
numberButtons.forEach((button) => {
    button.addEventListener('click', () => /* Append Number Function */)
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => /* Set Operation Function */)
});
