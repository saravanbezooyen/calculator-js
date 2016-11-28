var operator = "";
var number1 = null;
var number2 = null;

function addNumber(i) {
	var screen = document.getElementsByClassName('screen')[0];
	screen.innerHTML = screen.innerHTML + i;
	number2 = screen.innerHTML;
}

function addOperator(value) {
	var screen = document.getElementsByClassName('screen')[0];
	operator = value;	
	screen.innerHTML = "";

		if (number1 !=null){
			if (operator == "+") {
				number1 = Number(number1) + Number(number2);
			}
				if (operator == "-") {
				number1 = Number(number1) - Number(number2);
			}
				if (operator == "*") {
				number1 = Number(number1) * Number(number2);
			}
				if (operator == "/") {
				number1 = Number(number1) / Number(number2);
			} 
		} else {
			number1 = number2;
		}
}

function calculate() {
	var screen = document.getElementsByClassName('screen')[0];
		screen.innerHTML = "";
			if (operator == "+") {
				screen.innerHTML = Number(number1) + Number(number2);
			}
			if (operator == "-") {
				screen.innerHTML = Number(number1) - Number(number2);
			}
			if (operator == "*") {
				screen.innerHTML = Number(number1) * Number(number2);
			}
			if (operator == "/") {
				screen.innerHTML = Number(number1) / Number(number2);
			} 		
}

function bobbelpop() {
	var screen = document.getElementsByClassName('screen') [0];

	operator = "";
 	number1 = null;
 	number2 = null
 	screen.innerHTML = "";
}