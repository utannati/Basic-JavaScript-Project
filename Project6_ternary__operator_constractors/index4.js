var name = "JavaSctipt";
alert(name);
 function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
} 

function Vote_Function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_vote + " to vote.";
}

function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");

var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a  " + Erik.vehicle_Color + " , " +  Erik.vehicle_Model + " , " + " manufactured in Ford " + " , " +
    Erik.vehicle_Year;

}




// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");

// Display age
function NEw_Function() {
    document.getElementById("New_and_This").innerHTML =
    "myFather name is  " + myFather.firstName + " , " + myFather.lastName  + " , " +  myFather.age  + " , " +
    myFather.eyeColor;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var Starting_point = 9;
        function plus_one() {Starting_point += 1;}
        plus_one();
         return Starting_point;
    }
} 