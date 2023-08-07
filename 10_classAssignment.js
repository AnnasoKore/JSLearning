class Vehicle {
  vehicleType;
  company;
  vehicleName;
  price;
  average;
  topSpeed;

  constructor(vehicleType, company, vehicleName, price, average, topSpeed) {
    this.vehicleType = vehicleType;
    this.company = company;
    this.vehicleName = vehicleName;
    this.price = price;
    this.average = average;
    this.topSpeed = topSpeed;
  }
}
console.log(
  new Vehicle("4-wheeler", "Suzuki", "i20", 1500000, "20kmh", "180kmh")
);
console.log(
  new Vehicle("2-wheeler", "Honda", "Splendor", 85000, "65kmh", "90kmh")
);
console.log(
  new Vehicle("4-wheeler", "Suzuki", "Swift", 1200000, "22kmh", "170kmh")
);
console.log(
  new Vehicle("4-wheeler", "Tata", "Tiago", 800000, "25kmh", "160kmh")
);
console.log(
  new Vehicle("2-wheeler", "Bajaj", "Platina", 120000, "80kmh", "80kmh")
);
console.log('\n');

class College {
  collegeName;
  principleName;
  establishYear;
  university;
  city;
  constructor(collegeName, principleName, establishYear, university, city) {
    this.collegeName = collegeName;
    this.principleName = principleName;
    this.establishYear = establishYear;
    this.university = university;
    this.city = city;
  }
  display() {
    console.log(`College Name : ${this.collegeName} Principle Name : ${this.principleName} Establish Year : ${this.establishYear} University Name : ${this.university} City : ${this.city}`);
  }  
}
let SMS=new College('SMS','H. Patil',1999,'Solapur','Sangola');
let VMS=new College('VMS','M. Phule',1995,'Solapur','Sangola');
let fc=new College('FC','k. Swami',1998,'Pune','Pune');
let dypatil=new College('DYPatil','R Kulakarni',2009,'Kolhapur','Kolhapur');
let cope=new College('SMS','A. Ramswami',2005,'Pune','Pune');
console.log(SMS);
console.log(SMS.display());
console.log(VMS);
console.log(VMS.display());
console.log(fc);
console.log(fc.display());
console.log(dypatil);
console.log(dypatil.display());
console.log(cope);
console.log(cope.display());

console.log('\n');

let array=[SMS,VMS,fc,dypatil,cope];
function traverseObject(array) {
    function display() {
        console.log(`College Name : ${this.collegeName} Principle Name : ${this.principleName} Establish Year : ${this.establishYear} University Name : ${this.university} City : ${this.city}`);
      }
      for (const college of array) {
        college.display();
     }
}
traverseObject(array);
// for (const key in array) {
//     if (Object.hasOwnProperty.call(array, key)) {
//         const element = array[key];
//         console.log(`${key} :`,element);
//     }
// }
console.log('\nPrime Number');
function primeNumberOrNot(num) {
    if (num<=1||isNaN(+num)) {
        console.log(`${num} : Enter valid number`);
    }else{
        for (let index = 2; index < num; index++) {
            if (num%index==0) {
              return `${num} : is Not Prime`;
            } else {
               return `${num} : is Prime`;
            }
        }
    }
}
console.log(primeNumberOrNot(11));
console.log(primeNumberOrNot(32));
console.log(primeNumberOrNot("xyz"));
console.log(primeNumberOrNot(98));
console.log(primeNumberOrNot(151));
console.log(primeNumberOrNot(961));
console.log(primeNumberOrNot('292'));
console.log(primeNumberOrNot(3));
console.log(primeNumberOrNot(null));
console.log(primeNumberOrNot(undefined));