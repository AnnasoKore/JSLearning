console.log("---------------- Step - 1 ----------------");
function squareOfWordLength(str1) {
    var wordLength=str1.length;
    console.log("Length of given word is :",wordLength, " Square of the word is : ",(wordLength*wordLength));
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("---------------- Step - 2 ----------------");
var strDivision=function (str) {
    var strLength=str.length;
    var totalWords=str.split(" ");
    var wordCount =totalWords.length;
    var lengthDivision=strLength/wordCount;
    var lengthMultiple=strLength*wordCount;
    console.log(`Given string length is ${strLength} and total words are ${wordCount}`,'\n',`Division of ${strLength} / ${wordCount} is :  `,lengthDivision);
    console.log(`Given string length is ${strLength} and total words are ${wordCount}`,'\n',`Multiplication of ${strLength} * ${wordCount} is :  `,lengthMultiple);
}
strDivision("I am Angular Developer");
