console.log("----------- Step - 1 -----------");
var square=function (num) {
    console.log(`Square of given number - ${num} is :`,(num*num));
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log("----------- Step - 2 -----------");
console.log(`type of Square is: `,typeof square);
console.log("----------- Step - 3 -----------");
var areaOfRectangle =function (l, b) {
    console.log(`Area of rectangle length = ${l} and breadth = ${b} is :`,(l*b));
}
areaOfRectangle(499, 917);
console.log("----------- Step - 4 -----------");
var swapNames=function (name1, name2) {
    console.log("Before Swap : ", "name1 :", name1, "name2 :", name2);
    var tempName = name1;
    name1 = name2;
    name2 = tempName;
    console.log("After Swap : ", "name1 :", name1, "name2 :", name2+ "\n ");
  }
  swapNames("Mahi", "Rina");
  var swapValues=function (num1, num2) {
    console.log("Before Swap : ", "num1 :", num1, "num2 :", num2);
    var tempNum = num1;
    num1 = num2;
    num2 = tempNum;
    console.log("After Swap : ", "num1 :", num1, "num2 :", num2+ "\n ");
  }
  swapValues(55, 77);
  console.log("----------- Step - 5 -----------");
  var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = words.length;
    return wordCount;
 }
 var result = wordCount("JS the most popular language of internet");

var operationOnString=function (str) {
    var totalLength=str.length;
    console.log(`Given string '${str}' total number of character is : `,totalLength);
    console.log('Character at 6th position is : ' ,str.charAt(6));
    console.log('Character at 11th position is : ' ,str.charAt(6));
    console.log(`Last Character of given string '${str}' is: ` ,str.charAt(str.length-1));
    console.log(`First Character of given string '${str}' is: ` ,str.charAt(0));
    console.log(`Third last Character of given string '${str}' is: ` ,str.charAt(str.length-3));
    console.log(`Square of words in given string '${str}' is : `,(result*result));
    
}
operationOnString('JS the most popular language of internet');