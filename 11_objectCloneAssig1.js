function operationOnObject() {
    let personalDetails ={
        name : "Ravi More",
        age : 20,
        gender : "Male",
        married : "No",
        address: "Pune",
        phoneNumber : 6541249852,
        emailId : "ravimore@gmail.com"
    }
    let collegeDetails ={
        collegeName : "SMS",
        collegeAddress : "Sangola",
        telephone : "465 213"
    }
    let myDetails =Object.assign({}, personalDetails, collegeDetails);//merge objects using assign() method
    console.table(myDetails);

    let array=['Ravi','Anna','Sahil','Sagar','Dipak','Rohan'];
    let freezedArray=Object.freeze(array);
    //console.log(Object.freeze(array));

    var str='';
    for (const iterator of freezedArray) {
        //console.log(iterator);
        str=str.concat(iterator).concat(', ');
    }
    console.log('Freezed array : ',str);

    let string1='Codemind Technology';
    let startIndex=string1.indexOf('T');
    let endIndex=string1.length;
    var reverseString='';
    for (let index = endIndex; index >=startIndex; index--) {
        reverseString=reverseString.concat(string1[index]); 
        //console.log(string1[index]);
    }
    console.log('Reverse String : ',reverseString);
    
}

operationOnObject();


function objectClone() {
    let bankSBI={
     bankName : "SBI Bank",
     AcHolderName : "Ravi More",
     accountNumber : 897961981338,
     ifscCode : "SBI000561",
     branchName : "Sangola"
    } 
    let bankLocation = {
     street : "Miraj Road",
     city : "Sangola",
     pin : 413307
    }
    let cloneBankSBI = Object.assign({} , bankSBI);//clone object using assign() method
    console.log(cloneBankSBI);

    let cloneBankLocation={...bankLocation};//clone object using spread operator
    console.log(cloneBankLocation);

    let rateOfInterest ={
        homeLoanInterest : 6.0,
        personalLoanInterest : 6.4,
        deuInterest : 6.7,
    }

    let sbiDetails = Object.assign({}, bankSBI,bankLocation,rateOfInterest);//merge objects using assign() method
    console.log(sbiDetails);

    var result='';
    for (const key in sbiDetails) {
        if (Object.hasOwnProperty.call(sbiDetails, key)) {
            const element = sbiDetails[key];
            result=result.concat(`${key} : ${element}`).concat(', ');
            //console.log(`${key} : ${element}`);
        }
    }
    console.log("SBI Bank Details =  "+result);
 }
 
 objectClone();