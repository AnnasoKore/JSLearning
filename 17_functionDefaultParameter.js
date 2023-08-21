function myName(num1, num2) {
    console.log(num1/num2);
    console.log(num2);
}
myName(8);
myName(0);
//Function with default parameter
function division(num1, num2=1){
    console.log(num1/num2);
}
division(4, 5);
division(0, 7);
division(8);
division(0);