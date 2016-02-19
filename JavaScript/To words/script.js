    var ones = [
			"","one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten","eleven", "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["", "","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]; 
    var hundreds = ["", "thousand", "million", "billion", "trillion", "quadrillion"];
      

function toWords(digit){
    var result;
    
    if (digit == 0){
        result = "";
    } else if (digit < 20) {
        result = ones[digit];
    } else if (digit < 100){
        result = tens[(digit /10) | 0];
        if (digit % 10){
            result += " " + ones[digit % 10];
        }
    } else {
        result = ones[(digit / 100) | 0] + " hundred " + toWords(digit % 100);
    }
        return result.trim();
}
        
 function transform(digit){
     var numbers = [];
     while (digit > 0){
         numbers[numbers.length] = digit % 1000;
         digit = Math.floor(digit / 1000);
     }
     return numbers;
 }
 function addString(item, index){
     if(item){
         return item + " " + hundreds[index];
     }
         return "";
 }
 function notEmpty(item) {
  return !!item; 
};
function getValue (){    
    var digit = (document.getElementById("num").value);
        
   document.write(transform(digit).map(toWords).map(addString).filter(notEmpty).reverse().join(" "));
};