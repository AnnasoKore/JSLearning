function objectFunAssign1() {
    let professor= {
        name : "RajVeer",
        city : "pune",
        age : 25,
        collegeName : "FC",
        phoneNo : 5648654355,
        isMarried : "YES",
        degrees:{
            engineering : "CSC",
            phd : "Adv Computing",
            mba : "Project Manager"
        },
        certificates : ["Hacker Rank Participation","Certificate in IFE","Certificate in Adv. Programming"],
        teacherDegrees: function () {
            console.log(`Professor Degrees : Engineering - ${this.degrees.engineering}, \nPHD - ${this.degrees.phd}, \nMBA - ${this.degrees.mba}`);            
        }
    }
    console.log(professor.teacherDegrees());
    console.log(professor);
    professor.totalExperience = "14 Years";
    console.log(`After adding total experience `,professor);
    console.log(`Experience : ${professor.totalExperience}`);
    console.log(`Modifying age of professor is : Age - ${professor.age=30}`);
    console.log(professor);
    console.log("Before add new certificate : ",professor.certificates);
    professor.certificates.push("Oracle Certified");
    console.log("After adding new certificate : ",professor.certificates);
    console.log(`Last element of certificate array is : ${professor.certificates[professor.certificates.length-1]}`);
}
objectFunAssign1();
console.log("\n");
function objectFunAssign2() {
   let sbiBank={
    bankName : "State Bank of India",
    location : "Solapur",
    accountNumber : 123546484548,
    ifscCode : "SBIID65456",
    interestRate : 6.0,
    showDetails : function () {
        console.log(`Bank details : Bank Name - ${this.bankName} \nBank Location - ${this.location} \nAccount Number - ${this.accountNumber} \nIFSC Code - ${this.ifscCode} \nInterest rate - ${this.interestRate}`);
    }
   } 
   let axisBank={
    bankName : "Axis Bank",
    location : "Sangali",
    accountNumber : 687961354685,
    ifscCode : "AXIS78416",
    interestRate : 6.2,
    showDetails : function () {
        console.log(`Bank details : Bank Name - ${this.bankName} \nBank Location - ${this.location} \nAccount Number - ${this.accountNumber} \nIFSC Code - ${this.ifscCode} \nInterest rate - ${this.interestRate}`);
    }
   } 
   let hdfcBank={
    bankName : "HDFC Bank",
    location : "Kolhapur",
    accountNumber : 846854685669,
    ifscCode : "HDFCID98422",
    interestRate : 6.5,
    showDetails : function () {
        console.log(`Bank details : Bank Name - ${this.bankName} \nBank Location - ${this.location} \nAccount Number - ${this.accountNumber} \nIFSC Code - ${this.ifscCode} \nInterest rate - ${this.interestRate}`);
    }
   } 
   let yesBank={
    bankName : "YES Bank",
    location : "Pune",
    accountNumber : 874619846685,
    ifscCode : "YESID35684",
    interestRate : 6.1,
    showDetails : function () {console.log(`Bank details : Bank Name - ${this.bankName} \nBank Location - ${this.location} \nAccount Number - ${this.accountNumber} \nIFSC Code - ${this.ifscCode} \nInterest rate - ${this.interestRate}`);
    }
   } 
   let sbi=sbiBank.showDetails();
   console.log(sbi);
   console.log(axisBank.showDetails());
   console.log(hdfcBank.showDetails());
   console.log(yesBank.showDetails());
}
objectFunAssign2();