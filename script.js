const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        if (firstOperand === null) {
            firstOperand = number;
            display.value = firstOperand;
        } else {
            firstOperand = parseFloat(`${firstOperand}${number}`);
            display.value = firstOperand;
        }
    } else {
        if (secondOperand === null) {
            secondOperand = number;
            display.value = `${firstOperand} ${currentOperator} ${secondOperand}`;
        } else {
            secondOperand = parseFloat(`${secondOperand}${number}`);
            display.value = secondOperand;
        }
    }
}

function appendDecimal() {
    if (currentOperator === null) {
        if (firstOperand === null || firstOperand === 0) {
            firstOperand = 0;
        }
        if (firstOperand % 1 === 0) {
            firstOperand += '.';
            display.value = firstOperand;
        }
    } else {
        if (secondOperand === null || secondOperand === 0) {
            secondOperand = 0;
        }
        if (secondOperand % 1 === 0) {
            secondOperand += '.';
            display.value = secondOperand;
        }
    }
}

function toggleSign() {
    if (currentOperator === null) {
        if (firstOperand !== null) {
            firstOperand *= -1;
            display.value = firstOperand;
        }
    } else {
        if (secondOperand !== null) {
            secondOperand *= -1;
            display.value = `${firstOperand} ${currentOperator} ${secondOperand}`;
        }
    }
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand === null) {
        currentOperator = operator;
        display.value = `${firstOperand} ${operator}`;
    } else if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        evaluate();
        currentOperator = operator;
        display.value = `${firstOperand} ${currentOperator}`;
    }
}

function evaluate() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            case '%':
                if (secondOperand === 0) {
                    alert('Cannot perform modulo by zero');
                    return;
                }
                result = firstOperand % secondOperand;
                break;
            case '^2':
                if (firstOperand < 0) {
                    alert('Cannot take the square root of a negative number');
                    return;
                }
                result = firstOperand * firstOperand ;
                break;
            default:
                result = null;
        }
        display.value = `${firstOperand} ${currentOperator} ${secondOperand} = ${result}`;
        firstOperand = result;
        secondOperand = null;
        currentOperator = null;
    }
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '';
}

function calculate() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        evaluate();
    }
}

function calculateModulo() {
    if (firstOperand !== null && secondOperand !== null) {
        if (secondOperand === 0) {
            alert('Cannot perform modulo by zero');
            return;
        }
        display.value = firstOperand % secondOperand;
    }
}
function calculateSquare() {
    if (firstOperand !== null) {
        if (firstOperand < 0) {
            alert('Cannot take the square root of a negative number');
            return;
        }
        display.value = firstOperand * firstOperand ;
    }
}