var city; // Variable Declaration
let street;
const pin = 443211;
city = "Pune";
street = "Wakad Road";
// pin = "445578"; // Not allowed

var city; // variable re Declaration
// let street; // variable re Declaration not allowed

if(true) {
    var namePlayer = "Virat";
    let salary = 45000;
    const runs = 33000;
}
console.log(namePlayer);
//console.log(salary);
// console.log(runs);

function show(){
    var college = "COEP";
    let matches = 500;
    const won = 450; 
}
// console.log(college);
// console.log(matches);
// console.log(won);

function display(){
    console.log(`Inside function`);
    let isMarried = true;
    if (isMarried) {
        let greet =  "Good Morning";
        const PI = 3.1412;
        console.log(); 
    }
    // console.log(PI);
    // console.log(greet);
}
display();

// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");

// WAP to get the sum of numbers from 0 to 20
let sum = function(){
   let totalSum = 0;
    for (let index = 1; index <=20; index++) {
        totalSum = totalSum + index;
    }
    console.log(`Sum of first 20 numbers is : ${totalSum}`);
}
sum();
function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        // Log only odd positioned chars on console and do not consider empty spaces
        if (index%2!=0 && char!=" ") {
            console.log(char);
        }
    }

}
oddPositionedChars("hello");
oddPositionedChars("test");