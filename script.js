var operator = "";
var number1 = null;
var number2 = null;

function addNumber(i) {
    var screen = document.getElementsByClassName('screen')[0];

    screen.innerHTML = screen.innerHTML + i;

    (number1 == null) ? number1 = i : number2 = i;
}

function addOperator(value) {
    var screen = document.getElementsByClassName('screen')[0];

    operator = value;
    screen.innerHTML = "";
}

function calculate() {
    var screen = document.getElementsByClassName('screen')[0];
    screen.innerHTML = "";

    var value = 0;
    if (operator == "+") {
        value = Number(number1) + Number(number2);
    }else if (operator == "-") {
        value = Number(number1) - Number(number2);
    }else if (operator == "*") {
        value = Number(number1) * Number(number2);
    } else if (operator == "/") {
        value = Number(number1) / Number(number2);
    }

    screen.innerHTML = value;
    number1 = value;
    number2 = null;
}

function bobbelpop() {
    var screen = document.getElementsByClassName('screen') [0];

    operator = "";
    number1 = null;
    number2 = null
    screen.innerHTML = "";
}