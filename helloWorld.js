console.log("Hello World");
console.log("My name is Annaso Kore");

var num1=100;
var num2=200;
console.log("Before Swap")
console.log("num1 => ",num1 , "num2 => ", num2);
var temp=num1;
num1=num2;
num2=temp;
console.log("After Swap")
console.log("num1 => ",num1 , "num2 => ", num2);

var num = 100;
console.log(num);
var display = function(){
    console.log(`I am Angular Developer !`);
}
display();
console.log(typeof display);

var add = function(num1, num2){
    var result = num1+ num2;
    console.log(`Addition is: ${result} `);
}
add(20, 40);


var wordCount = function(word){
   var words = word.split(" ");
   var wordCount  = words.length;
   console.log(`In Given String - ${word}`);
   return wordCount;
}
var result = wordCount("I am UI Developer");
console.log(`Total word count is: ${result}`);
