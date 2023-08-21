function add(num1, num2, ...num ){
   console.log(`num1 - ${num1},  num2 - ${num2}`);
   console.log(num);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);


function sum(num1, num2, ...num ){
    let sumOfNum1Num2=num1+num2;
    let totalSumOfArray=0;
    for (let index = 0; index <=num.length-1; index++) {
        totalSumOfArray=totalSumOfArray+num[index];
    }    
    console.log(`Total sum of Num1 - ${num1}, Num2 - ${num2} and array of rest parameter Num - [${num}] is  : ${totalSum=sumOfNum1Num2+totalSumOfArray}`);
}
sum(5, 6);
sum(9, 5, 6);
sum(78, 90, 51, 68);
sum(89, 90, 45,78, 90, 51, 68);
