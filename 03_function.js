console.log("Swap using function ==> ");
console.log("Swap two values : ");
function swapName() {
  var name1 = "Ravi";
  var name2 = "Ram";
  console.log("Before Swap : ", "name1 :", name1, "name2 :", name2);
  var tempName = name1;
  name1 = name2;
  name2 = tempName;
  console.log("After Swap : ", "name1 :", name1, "name2 :", name2);
}
swapName();
console.log("===================================================");
console.log("Swap Three Numbers :");
function swapNumbers(num1, num2, num3) {
  var num1;
  var num2;
  var num3;
  console.log("Before Swap", "num1 : ", num1, "num2 : ", num2, "num3 : ", num3);
  var tempNum = num1;
  num1 = num2;
  num2 = num3;
  num3 = tempNum;
  console.log("After Swap", "num1 : ", num1, "num2 : ", num2, "num3 : ", num3);
}
swapNumbers(100, 200, 300);
