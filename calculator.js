
function calc (number1, number2, operator) {
    if (operator == undefined) {
        return "wrong data provided"
    } else {
        if (operator == "+") {
            return number1+number2
        } else if (operator == "-") {
            return number1-number2
        } else if (operator == "*") {
            return number1*number2
        } else if (operator == "/") {
            return number1/number2
        }
    } 

    if (number2 == undefined) {
        if (operator == "+") {
                number2=0;
            return number1+number2
        } else if (operator == "-") {
                number2=0;
            return number1-number2
        } else if (operator == "*") {
            number2=1;
            return number1*number2
        } else if (operator == "/") {
            number2=1;
            return number1/number2
        }
    }  else {
        if (operator == "+") {
            return number1+number2
        } else if (operator == "-") {
            return number1-number2
        } else if (operator == "*") {
            return number1*number2
        } else if (operator == "/") {
            return number1/number2
        }
    } 
}
console.log(calc(2, 5, '+'));
console.log(calc(2, 5, '-'));


console.log(calc(2, 5, '*'));
console.log(calc(2, 0, '/'));
