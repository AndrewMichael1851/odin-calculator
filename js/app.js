/****************************/
/*** Odin Calculator v0.3 ***/
/****************************/

// Add the storage variables for the output screen.
let input = '';
let currentNumber = '';
let priorNumber = '';
let priorOperator = '';
let solution = '';

// Add the event listener constants.
const buttons = document.querySelectorAll('.button');
const functions = document.querySelectorAll('.function');
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');

// Add the event listener.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        input = e.target.innerText;

        // Math operation swtich.
        switch (input) {
            case '+':
                priorNumber = currentNumber;
                priorOperator = input;
                currentNumber = '';
                console.log(input);
                break;
            case '-':
                priorNumber = currentNumber;
                priorOperator = input;
                currentNumber = '';
                console.log(input);
                break;
            case '*':
                priorNumber = currentNumber;
                priorOperator = input;
                currentNumber = '';
                console.log(input);
                break;
            case '/':
                priorNumber = currentNumber;
                priorOperator = input;
                currentNumber = '';
                console.log(input);
                break;
            case '.':
                priorNumber = currentNumber;
                priorOperator = input;
                currentNumber = '';
                console.log(input);
                break;
            case '=':
                switch (priorOperator) {
                    case '+':
                        solution = addition(parseInt(priorNumber), parseInt(currentNumber));
                        break;
                    case '-':
                        solution = subtraction(parseInt(priorNumber), parseInt(currentNumber));
                        break;
                    case '*':
                        solution = multiplication(parseInt(priorNumber), parseInt(currentNumber));
                        break;
                    case '/':
                        solution = division(parseInt(priorNumber), parseInt(currentNumber));
                        break;
                }
                priorNumber = currentNumber;
                currentNumber = '';
                console.log(input);
                break;
        }

        // Store the information for the next iteration.
        if (parseInt(input) || input === '0') {
            currentNumber = currentNumber + input;
        }

        // Display the result on the screen and in the console.
        if (input === '=') {
            currentScreen.innerText = solution;
            lastScreen.innerText = '';
            console.log('Input: ' + input);
            console.log('Current Number: ' + currentNumber);
            console.log('Prior Number: ' + priorNumber);
            console.log('~~~~~~~~~~ END EVENT ~~~~~~~~~~')
        } else {
            currentScreen.innerText = input;
            lastScreen.innerText = lastScreen.innerText + input;
            console.log('Input: ' + input);
            console.log('Current Number: ' + currentNumber);
            console.log('Prior Number: ' + priorNumber);
            console.log('~~~~~~~~~~ END EVENT ~~~~~~~~~~')
        }
    });
}

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

// Functionality for CLEAR button.
for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener('click', function (e) {
        input = '';
        currentNumber = 0;
        priorNumber = '';
        priorOperator = '';
        solution = '';
        currentScreen.innerText = currentNumber;
        lastScreen.innerText = priorNumber;
        console.log('FULL CLEAR');
        console.log('~~~~~~~~~~ END EVENT ~~~~~~~~~~')
    });
}

// OLD CODE
/*
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
*/
