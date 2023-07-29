console.log("------------------------ Assignment - 1 ------------------------");
console.log("----------- Task - 1 -----------");
function evenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`Given number ${num} is - Even`);
  } else {
    console.log(`Given number ${num} is - Odd`);
  }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log("----------- Task - 2 -----------");
function moreThan10Char(str) {
  if (str.length > 10) {
    console.log(`Given string is Grater than 10 characters - '${str}'`);
  } else {
    console.log(`Given string is Less than 10 characters - '${str}'`);
  }
}
moreThan10Char("JavaScript - ES6");
moreThan10Char("Java - 8");

console.log("----------- Task - 3 -----------");
function stringStartsWith(str) {
  if (str.startsWith("Java") == true) {
    console.log(`Given string '${str}' is Starts with 'Java'`);
  } else {
    console.log(`Given string '${str}' is Not started with 'Java'`);
  }
}
stringStartsWith("Python Language");
stringStartsWith("JavaScript Language");


console.log("------------------------ Assignment - 2 ------------------------");
var voteEligible = function (age) {
  if (age <= 0 || age > 130 || isNaN(+age)) {
    console.log(`Invalid age - ${age}`);
  } else if (age >= 18) {
    console.log(`You are eligible for vote`);
  } else {
    console.log(`You are NOT eligible for vote age - ${age}`);
  }
};
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);


console.log("------------------------ Assignment - 3 ------------------------");
var gradeCalculation = function (marks) {
  if (marks <= 0 || marks > 100 || isNaN(+marks)) {
    console.log(`Please provide the valid marks - ${marks} `);
  } else if (marks >= 90) {
    console.log(`Fantastic marks : ${marks}, Your grade is A+`);
  } else if (marks < 90 && marks >= 75) {
    console.log(`Excellent marks : ${marks}, Your grade is A`);
  } else if (marks < 75 && marks >= 50) {
    console.log(`Good marks : ${marks}, Your grade is B`);
  } else if (marks < 50 && marks >= 35) {
    console.log(`Marks is : ${marks}, Your grade is C, Need to improvement`);
  } else {
    console.log(`Marks is : ${marks}, You are Fail try to next time`);
  }
};
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);