// Write a JavaScript program to compute the sum of the two given integers.If the two values are the same, then return triple their sum.

function sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = document.getElementById("result");
    if (num1 === num2) {
        // this line is to convert the string to number and then multiply by 3
        result.innerHTML = (Number(num1) + Number(num2)) * 3;
    } else {
        result.innerHTML = Number(num1) + Number(num2);
    }
}
