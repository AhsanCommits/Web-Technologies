// Create a function called multiplyBy() and divideBy() which reads the value from the input
// and display the result.

function multiplyBy() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    // round of the result to 3 decimal places num1 / num2
    document.getElementById("result").innerHTML = Math.round(num1 / num2);
}

