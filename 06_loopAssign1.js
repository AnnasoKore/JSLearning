console.log("-: For Loop :-");
console.log("--------------- Task - 1 --------------");
var result='';
for (let index = 5; index <= 15; index++) {
    result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 2 --------------");
var result='';
for (let index = 50; index >=40; index--) {
        result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 3 --------------");
var result='';
for (let index = 1; index < 30; index+=2) {
       result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 4 --------------");
var result='';
for (let index = 0; index <=18; index+=2) {
   result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 5 --------------");
var result='';
for (let index = 5; index <=50; index+=5) {
   result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 6 --------------");
var result='';
for (let index = 10; index <=100; index+=10) {
   result=result.concat(index).concat(' ');
}
console.log(result);
console.log("--------------- Task - 7 --------------");
var result='';
for (let index = 100; index >=10; index-=10) {
    result=result.concat(index).concat(' ');
}
console.log(result);

console.log('\n-: While Loop :-');
console.log("--------------- Task - 1 --------------");
var i=5;
var result='';
while (i<=15) {
    result=result.concat(i).concat(' ');
    i++;
}
console.log(result);
console.log("--------------- Task - 2 --------------");
var a=50;
var result='';
while (a>=40) {
    result=result.concat(a).concat(' ');
    a--;
}
console.log(result);
console.log("--------------- Task - 3 --------------");
var b=1;
var result='';
while (b<30) {
    result=result.concat(b).concat(' ');
    b+=2;
}
console.log(result);
console.log("--------------- Task - 4 --------------");
var c=0;
var result='';
while (c<=18) {
    result=result.concat(c).concat(' ');
    c+=2;
}
console.log(result);
console.log("--------------- Task - 5 --------------");
var d=5;
var resultStr='';
while (d<=50) {
    resultStr=resultStr.concat(d).concat(' ');
    d+=5;
}
console.log(resultStr);
console.log("--------------- Task - 6 --------------");
var e=10;
var result='';
while (e<=100) {
    result=result.concat(e).concat(' ');
    e+=10;
}
console.log(result);
console.log("--------------- Task - 7 --------------");
var f=100;
var result="";
while (f>=10) {
    result=result.concat(f).concat(' ');
    f-=10;
}
console.log(result);

console.log("\nSome extra examples on loops");
console.log('Table 1 - 10');
var result='';
for (let index = 1; index <=10; index++) {
    for (let index2 = 1; index2 <=10; index2++) {       
   result=result.concat(index*index2).concat(' ');
    }     
}
console.log(result);