console.log("------------------------ Assignment - 1 -----------------------");
function stringBasics() {
    var company='Google';
    var hobby1='Reading';
    var hobby2='Traveling';
    var hobby3='Playing Cricket'
    console.log(`My dream company is - ${company} `);
    console.log(`My hobbies are : ${hobby1}, ${hobby2}, and ${hobby3}. `);
    console.log(`Sum the total characters in hobbies is : ${(hobby1.length+hobby2.length+hobby3.length)}`);
}
stringBasics();

console.log("------------------------ Assignment - 2 -----------------------");
function stringHandsOn() {
    var str="     Hey you are doing good, keep it up      ";
    console.log(`Given string is - '${str}'.`);
    console.log(`Length of given string is - ${str.length}`);
    console.log(`String after trim - '${str.trim()}'`);
    console.log(`total number of extra spaces is - ${str.length - str.trim().length}`);
    console.log(`The first character after trim is - '${str.trim().charAt(0)}' \nand Last character after trim is - '${str.trim().charAt(str.trim().length-1)}'`);
    console.log(`Total words in the string is - ${str.trim().split(' ').length}`);
    console.log(`Index of word 'good' is - ${str.trim().indexOf('good')}`);
    console.log(`Substring using substring() method at index - 22 is : "${str.trim().substring(22)}" \nand Substring using slice() method at index - 22 is : "${str.trim().slice(22)}"`);
    console.log(`String ends with word - 'up' is : ${str.trim().endsWith('up')} \nString starts with word - 'Hey' is : ${str.trim().startsWith('Hey')}`);
    console.log(str.trim().charAt(0));
    
}
stringHandsOn();