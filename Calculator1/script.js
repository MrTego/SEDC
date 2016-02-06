var result = 0;
var query = "";
function performOperation(firstNumber, secondNumber, operation) {
    switch (operation) {
        case "+":
		result = firstNumber + secondNumber;
			break;
		case "-":
		result = firstNumber - secondNumber;
			break;
		case "*":
		result = firstNumber * secondNumber;
			break;
		case "/":
		result = firstNumber / secondNumber;
			break;
	}
	return result;
    
}

var label = document.getElementById("result");
function printingInLabelVal (value){
	label.value +=value;
}

var last_operation;

elements = document.getElementsByTagName("button");
for (var i = 0; i < 16; i++) {

	elements[i].onclick = function(){

		if(this.value == "c"){
			result = 0;
			label.value = "";
		}
		else if(isNaN(Number(this.value))){

			var current_number = Number(label.value);
			label.value = "";

			if(result === 0){
				result = current_number;
			}else {

				result = Math.floor(performOperation(result, current_number, last_operation));

				if(this.value == "="){
					label.value = result;
				}
			}	

			last_operation = this.value;

		}else{
			printingInLabelVal(this.value);
		}

		
	};
}
