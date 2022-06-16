var name = "JavaScript!"; //This code is for alert message when the browser is runs
alert(name)

function displayDate() {
document.getElementById("text").innerHTML = Date(); // this code is for the date display and call by id to display in the browsere
}


function myfunction() {
var sentence = "I am learning"; // this code is for concatenation the sentence and display on the browser 
     sentence += " a lot from this course!";
    
    document.getElementById("concat").innerHTML = sentence;
}