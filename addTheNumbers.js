function myFunction() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var sum = parseInt(n1 + n2);
    document.getElementById("result").innerHTML = parseInt(sum);
}


function multiplyNumbers() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var answer = n1 * n2;
    document.getElementById("result").innerHTML = answer;
}

function subNumber() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var answer = n1 - n2;
    document.getElementById("result").innerHTML = answer;
}


function divideNumbers() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var answer = n1 / n2;
    document.getElementById("result").innerHTML = answer;
}