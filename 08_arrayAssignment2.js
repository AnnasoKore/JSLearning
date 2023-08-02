function arrayNumbers(array) {
    console.log(`Total length of an array is - ${array.length}`);
    console.log(`First element is - '${array[0]}' and last element is - '${array[array.length-1]}'`);
    console.log(`3rd last element is - ${array[array.length-3]}`);

    var str='';
    for (let index = 0; index < array.length; index++) {        
        if (array[index]%2==0) {
            str=str.concat(array[index]).concat(' ');
        }
    }
    console.log(`All Even numbers in given array is - [${str}]`);

    var str='';
    for (let index = 0; index < array.length; index++) {        
        if (array[index]%2!=0) {
            str=str.concat(array[index]).concat(' ');
        }
    }
    console.log(`All Odd numbers in given array is - [${str}]`);

    var evenPosition='';
    for (let index = 0; index < array.length; index+=2) {
        evenPosition=evenPosition.concat(array[index]).concat(' ');     
    }
    console.log(`All the Even positioned elements is - [${evenPosition}]`);

    var evenPosition='';
    for (let index = 1; index < array.length; index+=2) {
        evenPosition=evenPosition.concat(array[index]).concat(' ');     
    }
    console.log(`All the Odd positioned elements is - [${evenPosition}]`);

    var totalSum=0;
    for (let index = 0; index < array.length; index++) {
        totalSum+=(array[index]);     
    }
    console.log(`Total sum of all elements is - [${totalSum}]`);

    var arrayStr='';
    for (let index = 0; index < array.length; index++) {
        if (array[index]%5==0) {
            arrayStr=arrayStr.concat(array[index]).concat(' ');
        }        
    }
    console.log(`All numbers which is multiple by 5 is - [${arrayStr}]`);
    
    console.log(`Is number 115 available in given array - ${array.includes(115)} `);
    console.log(`Is number 23 available in given array - ${array.includes(23)} `);
    console.log(`Insert numbers 55, 66 before index 3 is - [${array.splice(3,0,55,66),array}]`);
    console.log(`Delete 3 elements starting from index 4 is - [${array.splice(4,3),array}]`);
}
arrayNumbers([20,31,40,25,23,11,29,9,60,2,11]);