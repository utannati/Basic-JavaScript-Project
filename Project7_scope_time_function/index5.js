var X = 10;
function Add_numbers_1() {
   
    document.write(20 + X + "<br>");
}


function Add_numbers_2() {
    var m = 10;
    console.log(15 + m);
}
function Add_numbers_3() {
    console.log(m + 100);
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

class name{

}

function get_Date() {
    var Time, can_greet;
    Time = document.getElementById("Time").value;
    can_greet ="how are you today! ."
    
    if (Time < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning" +" " +can_greet ;
    }else if(Time >12&&Time < 18){
        document.getElementById("Greeting").innerHTML = "Good Afternoon"+" " +can_greet;
    }else if(Time>18&&Time<=24){
        document.getElementById("Greeting").innerHTML = "Good evening" +" " +can_greet;
    }else{

        document.getElementById("Greeting").innerHTML = "No Such Time!Enter Valid time";
    }
}

function Time_function() {
    var Time = new Date().getHours()
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        reply = "it is afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
}

