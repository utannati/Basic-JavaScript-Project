function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var text = "Hello World!";
// var length = text.length;

var str = new String( "This is string" );
         document.write("str.length is:" + str.length);

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var cat_Picture = [];
    cat_Picture[0] = "sleeping";
    cat_Picture[1] = "playing";
    cat_Picture[2] = "eating";
    cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price;

}

var X = 82;
document.write(X);
{
    let x = 33;
    document.write("<br>" + X)
}
document.write("<br>" + X);

function getData() {  
    let fname = 'John',  
    lname = 'Rickman',  
    age = '25',  
    occupation = 'Private Employee';  
      
    return [fname, lname, age, occupation];  
    }  
    const [fname, lname, age, occupation] = getData();  
      
    document.write("Name = " + fname + " " + lname + "<br>");  
    document.write("Age = " + age + "<br>");  
    document.write("Occupation = " + occupation);  

    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        discription : function() {
            return  "The car is a " + this.year + this.color + this.make + this.model;
        }    
};

document.getElementById("Car_Object").innerHTML = car.discription();

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

document.getElementById("Number").innerHTML = text;