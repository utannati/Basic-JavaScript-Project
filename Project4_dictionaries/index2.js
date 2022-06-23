function my_Dictionary() { // this is how we write to identify the value
    var Animal = {
        species:"Dog",
        color:"white",
        breed:"labrador",
        age:10,
        sound:"bark!"
    };
    delete Animal.sound; // this is the delete oprator to remove the value. 
    document.getElementById("Dictionary").innerHTML = Animal.sound; // this is how we call our id in our HTML.
}