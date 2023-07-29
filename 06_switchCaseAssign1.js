console.log("------------------------ Assignment - 1 -----------------------");
function monthOfYear(month) {
  switch (month) {
    case 1:
      console.log(`${month} - January`);
      break;
    case 2:
      console.log(`${month} - February`);
      break;
    case 3:
      console.log(`${month} - March`);
      break;
    case 4:
      console.log(`${month} - April`);
      break;
    case 5:
      console.log(`${month} - May`);
      break;
    case 6:
      console.log(`${month} - June`);
      break;
    case 7:
      console.log(`${month} - July`);
      break;
    case 8:
      console.log(`${month} - August`);
      break;
    case 9:
      console.log(`${month} - September`);
      break;
    case 10:
      console.log(`${month} - October`);
      break;
    case 11:
      console.log(`${month} - November`);
      break;
    case 12:
      console.log(`${month} - December`);
      break;
    default:
        console.log(`Invalid input ${month} - Enter valid input between 1 - 12`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

console.log("------------------------ Assignment - 2 -----------------------");
function eligibilityForMarriage(gender, age) {
    if ((gender=='Male'&&age>=21)||(gender=='Female' && age>=18)) {
        console.log(`Gender = ${gender}, Age = ${age}  - You are eligible for marriage`);
    } else {
        console.log(`Gender = ${gender}, Age = ${age}  - You are NOT eligible for marriage`);
    }
} 
eligibilityForMarriage('Male', 17);
eligibilityForMarriage('Male', 25);
eligibilityForMarriage('Female', 28);
eligibilityForMarriage('Female', 16);
eligibilityForMarriage('Other', 35);
eligibilityForMarriage('Other', 41);

console.log("------------------------ Assignment - 3 -----------------------");
var leapYear=function (year) {
    if (year<=0 || isNaN(+year)) {
        console.log(`This '${year}' is - invalid input ro Year`);
    } else if (year%4==0) {
        console.log(`This '${year}' is - Leap Year`);
    }else{
        console.log(`This '${year}' is - NOT leap Year`);
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);