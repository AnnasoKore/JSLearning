console.log("---------------- Step - 1 ----------------");
var greaterNumber=function (num1, num2) {
    console.log(`Greatest number amongst ${num1} and ${num2} is : `,(num1>num2?num1:num2));
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("---------------- Step - 2 ----------------");
var isEvenOrOddNum=function (num) {
    console.log(`Given number ${num} is : `,(num%2==0?"Even": "Odd"));
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("---------------- Step - 3 ----------------");
var oddOREven=function (str) {
    var wordLength= str.length;
    console.log(`Given word length ${wordLength} is :`,(wordLength%2==0?"Even":"Odd"));
}
oddOREven("JavaScript");
oddOREven("Developer");
oddOREven("Google");