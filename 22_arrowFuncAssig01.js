function arrowFunctionAssignment() {
    let msg = ()=>{
        console.log(`Good Morning, Today is Tuesday`);
        }
        msg();
        
    let multiplication = (num1, num2, num3=1)=>{
        console.log(`Multiplication of Num1 - ${num1}, Num2 - ${num2}, Num3 - ${num3} is  :  ${num1*num2*num3}`);
    } 
    multiplication(5, 5, 2); 
    multiplication(10, 4);
    
    let addition = (num1, num2, num3, num4, num5)=>{
        //console.log(`Addition of Num1 - ${num1}, Num2 - ${num2}, Num3 - ${num3}, Num4 - ${num4}, Num5 - ${num5} is  :  ${num1+num2+num3+num4+num5}`);
        return num1 + num2 + num3 + num4 + num5;
    }
    // let sum = addition(100, 100, 200, 349, 756);
    // console.log(`Addition is : ${sum}`);
    console.log(`Addition of numbers is : ${addition(100, 100, 200, 349, 756)}`);
    // let add = addition('I am',' learning',' ES6',' features',' in depth');
    // console.log(`Addition of words is : ${add}`);
    console.log(`Addition of words is : ${addition('I am',' learning',' ES6',' features',' in depth')}`);

}
arrowFunctionAssignment();