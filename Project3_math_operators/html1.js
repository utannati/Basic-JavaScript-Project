var name = "JavaScript Function!";
alert(name);

function additional_function() {
    var addition = 2 + 10;
    document.getElementById("Math").innerHTML = "2 + 10 =" + addition;
}

function subtractional_function() {
    var subtraction = 12 - 9;
    document.getElementById("Mathematics").innerHTML = "12 - 9 =" + subtraction;
}

function multiplication_function() {
    var multiplication = 12 * 9;
    document.getElementById("Multiple").innerHTML = "12 x 9 =" + multiplication;
}

function division_function() {
    var division = 30 / 5;
    document.getElementById("Division").innerHTML = "30 / 5 =" + division;
}

function modulus_operator() {
    var simple_Math = 30 % 5;
    document.getElementById("Sample").innerHTML = "when you divide 30 by 5 you have a remainder of:6";
}

function negation_operator() {
    var X = 20;
    document.getElementById("text").innerHTML = -X; 
}

var X = 28;
X++;
var Y = 40
Y--;
document.write(X, Y);

window.alert(Math.random() * 100);
