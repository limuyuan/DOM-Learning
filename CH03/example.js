function short() {
    var beatles = Array("John", "Paul", "George", "Ringo");
    for (var count = 0; count < beatles.length; count++) {
        alert(beatles[count]);
    }
}

function multiply(num1, num2) {
    var total = num1 * num2;
    return total;
}

function convertToCelsius(temp) {
    var result = temp - 32;
    result /= 1.8;
    return result;
}

var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);

function square(num) {
    var total = num * num;
    return total;
}

var total = 50;
var number = square(20);

var num = 7.561
var num = Math.round(num);

document.getElementById("a").setAttribute("title", "another");
alert(document.getElementById("a").getAttribute("title"));