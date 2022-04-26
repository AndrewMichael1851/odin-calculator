/****************************/
/*** Odin Calculator v0.2 ***/
/****************************/

// Add the storage variables.
let startNumber = '';
let inputNumber = '';
let inputFunction = '';

// Add the event listeners for the number buttons.
const buttons = document.querySelectorAll('.button');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        // Set the new input.
        inputNumber = parseInt(e.target.innerText);
        console.log('Input: ' + inputNumber);

        // Write the current input to the operation screen.
        currentScreen.innerText = inputNumber;

        // Write the last input to the operation screen.
        lastScreen.innerText = lastScreen.innerText + ' ' + inputNumber;
    });
};

// Add the event listeners for the function buttons.
const functions = document.querySelectorAll('.function');

for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function (e) {
        // Set the new input.
        inputFunction = e.target.innerText.toString();
        console.log('Function: ' + inputFunction);

        // Write the current input to the operation screen.
        currentScreen.innerText = inputFunction;

        // Write the last input to the operation screen.
        lastScreen.innerText = lastScreen.innerText + ' ' + inputFunction;
    });
};

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

// Operation function.
function operate(a, operator, b) {
    switch (operator) {
        case operator = '+':
            console.log(addition(a,b));
            break;
        case operator = '-':
            console.log(subtraction(a,b));
            break;
        case operator = '*':
            console.log(multiplication(a,b));
            break;
        case operator = '/':
            console.log(division(a,b));
            break;
        default:
            console.log('Error: Use an accepted operator: (+, -, *, /).')
    }
}
