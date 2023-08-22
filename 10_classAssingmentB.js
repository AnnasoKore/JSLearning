class employee {
  constructor(emp_id, emp_name, emp_dep, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dep = emp_dep;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infy");


let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];
console.log('----------- Task - 1 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_company==='TCS') {
        console.log(`Employee name - ${employee.emp_name} and Company is - ${employee.emp_company}`);
    }
}

console.log('----------- Task - 2 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_dep==='Finance') {
        console.log(`Department - ${employee.emp_dep} and Employee name - ${employee.emp_name}`);
    }
}

console.log('----------- Task - 3 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_name.startsWith('R')) {
        console.log(employee);
    }
}

console.log('----------- Task - 4 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_salary>75000) {
        console.log(`Employee name - ${employee.emp_name}, Company is - ${employee.emp_company} and Salary is ${employee.emp_salary}`);
    }
}

console.log('----------- Task - 5 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_salary>=50000 && employee.emp_dep==='IT') {
        console.log(employee);
    }
}

console.log('----------- Task - 6 -----------');
for (const employee of arrayEmployee) {
    if (employee.emp_company==='Infy') {
        console.log(employee);
    }
}