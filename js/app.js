/* Basic Math Functions */
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

/* Operation Function */
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
