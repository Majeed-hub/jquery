let greet = document.getElementById("displayEl");


function calc(){
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    let sign = document.getElementById("sign").value;
    let result;
    switch (sign) {
      case "+":
        result = num1 + num2;
        
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
    }
    

    greet.textContent = result;
}




//start
// let num = 10;
// if (num % 2 == 0) {
//   greet.textContent = "Even number";
// } else {
//   greet.textContent = "Odd number";
// }