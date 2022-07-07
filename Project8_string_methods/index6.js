function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentece. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy. ";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function func() {
    var str = 'hello world';
    var string = str.toUpperCase();
    document.write(string);
}
func();

 // Taking input a string.
 var string = "GeeksforGeeks";
 
 // Taking a regular expression.
 var re1 = /G/;
 var re2 = /e/;
 var re3 = /s/;

 // Printing the index of matching alphabets
 document.write(string.search(re1) + "<br>");
 document.write(string.search(re2) + "<br>");
 document.write(string.search(re3));

 function string_Method() {
     var X =182;
     document.getElementById("Numbers_to_string").innerHTML = X.toString();
 }

 function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

var test=213.73145;
document.write(test.toFixed(1));

var num=213;
  document.write("Output : " + num.valueOf()); 