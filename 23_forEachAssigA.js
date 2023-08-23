const arrayNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601]

arrayNumbers.forEach((numbers, index)=>{
console.log(`Value - ${numbers} at Index - ${index}`);
})

const negativeNumberArray=[];
const positiveNumberArray=[];
let positiveNumber='';
arrayNumbers.forEach(element => {
    if (element>=0) {
        // console.log(element);
        positiveNumberArray.push(element);
        positiveNumber = positiveNumber.concat(element).concat(' ');
    } else {
        negativeNumberArray.push(element);
    }
});
console.log('\nPositive numbers in given array is : ',positiveNumber);
//console.log('\nPositive numbers in given array is : ',positiveNumberArray);

console.log('\nNegative number array is : ',negativeNumberArray);

let evenNumbers='';
arrayNumbers.forEach(element => {
    if (element%2==0) {
        evenNumbers=evenNumbers.concat(element).concat(' ');
    }
});
console.log('\nEven numbers in given array is : ',evenNumbers);

let sumOfAllElements=0;
arrayNumbers.forEach(element => {
    sumOfAllElements+=element;
});
console.log('\nSum of all elements in array is : ',sumOfAllElements);

evenIndexNumbers = '';
arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        evenIndexNumbers=evenIndexNumbers.concat(element).concat(' ');
    }
});
console.log('\nEven number index values is : ',evenIndexNumbers);

