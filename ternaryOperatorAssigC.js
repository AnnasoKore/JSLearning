console.log("--------------------- Step - 1 ---------------------");
function maleMarriageEligibility(gender, age, boyName) {
   return ((gender=='Male')|| (gender=='male')) && (age>=21) ?`Hey ${boyName} you are eligible for Marriage` : `${boyName} you are NOT eligible for Marriage`;
}
console.log(maleMarriageEligibility('Male',25,'Billgates'));
console.log(maleMarriageEligibility('male',17,'Stew Jobs'));
console.log(maleMarriageEligibility('Female',30,'Rina'));

console.log("--------------------- Step - 2 ---------------------");
function femaleMarriageEligibility(gender, age, girlName) {
   return ((gender=='Female')||(gender=='female')) && (age >= 21) ? `Hey ${girlName} you are eligible for Marriage` : `${girlName} you are NOT eligible for Marriage`;
}
console.log(femaleMarriageEligibility('Female',16,'Jenifer'));
console.log(femaleMarriageEligibility('female',27,'Malinda Gates'));
console.log(femaleMarriageEligibility('Male',25,'Ram'));

console.log("--------------------- Step - 3 ---------------------");
var eligibilityTCSInterview = function (gradScore, hscScore, sscScore, candidateName) {
    console.log(((gradScore>=70)||(hscScore>=80)||(sscScore>=90)) ? `Congratulation ${candidateName} you are eligible for TCS interview` : `${candidateName} Unfortunately you are NOT eligible for interview`);
}
eligibilityTCSInterview(80,86,90,'Aman');
eligibilityTCSInterview(70,65,55,'Rahul');
eligibilityTCSInterview(60,79,88,'Sahil');
console.log("-------------------------------------------------------");