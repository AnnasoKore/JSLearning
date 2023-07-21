console.log("------------ Step 1 : Functions without argument ------------");
function getName() {
  var name = "Krishna";
  return name;
}
var res = getName();
console.log("Given name is : " + res);

function add() {
  var a = 10;
  var b = 20;
  console.log("Addition of a and b is : " + (a + b));
}
add();
console.log("-------------- Step 2 : Function with argument --------------");
function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First name : " +
      firstName +
      "\n" +
      "Last name : " +
      lastName +
      "\n" +
      "College name : " +
      collegeName
  );
}
personalDetails("Akash", "More", "SMS");
console.log(
  "-------------- Step 3 : Swap values using function with argument --------------"
);
function swapValues(name1, name2) {
  console.log("Before Swap : ", "name1 :", name1, "name2 :", name2);
  var tempName = name1;
  name1 = name2;
  name2 = tempName;
  console.log("After Swap : ", "name1 :", name1, "name2 :", name2+ "\n ");
  //console.log("\n");
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log(
  "------- Step 4 : Addition of three numbers using function with argument -------"
);
function addThreeValues(n1, n2, n3) {
  console.log("Addition of given three numbers : " + (n1 + n2 + n3));
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good ", "Morning");
console.log("\n");
console.log("-------------------- Bank Details --------------------");
function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "Bank name : " +
      bankName +
      "\n" +
      "Account number : " +
      accountNum +
      "\n" +
      "Bank location : " +
      location +
      "\n" +
      "Postal code : " +
      pinCode
  );
  console.log("\n");
}
bankDetails("CITI Bank", 4532897615, "Pune", 431202);
bankDetails("Axis Bank", 3486548484, "Mumbai", 472103);
bankDetails("HDFC Bank", 8546712354, "Pune", 436812, "Open");
