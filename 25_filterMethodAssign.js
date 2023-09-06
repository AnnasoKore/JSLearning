console.log('---------- Assignment - A ----------');
function filterMethodAss1(array) {
    console.log('Given array is : ',array);
    console.log('----------: Finding all the numbers which are greater than 50 :----------');
    const newArray = array.filter((element)=>{
        return element>50;
    });
    console.log('Numbers which are greater than 50 is : ',newArray);

    console.log('-----------: All even numbers of given array :----------');
    const evenArray = array.filter((element)=>{
        if (element % 2 == 0) {
            return element;
        }
    });
    console.log('Even numbers of given array is : ',evenArray);

    console.log('-----------: All odd numbers of given array :----------');
    const oddArray = array.filter((element)=>{
        if (element % 2 !== 0) {
            return element;
        }
    });
    console.log('Odd numbers of given array is : ',oddArray);

    console.log('-----------: Finding all numbers which are multiple of 5 :----------');
    const multipleByFiveArray = array.filter((element)=>{
        if (element % 5 == 0) {
            return element;
        }
    });
    console.log('All numbers which are multiple of 5 : ',multipleByFiveArray);

    console.log('-----------: Finding all numbers which are between 20 and 50 :----------');
    const betArray = array.filter((element)=>{
        if (element > 20 && element < 50) {
            return element;
        }
    });
    console.log('All numbers which are between 20 and 50 : ',betArray);

}
filterMethodAss1([20,11,40,25,37,49,9,90,60,2,19]);

console.log('\n---------- Assignment - B ----------');
function filterMethodAss() {
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
      
      let arrayOfEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];
      console.log('----------: Task No - 1 :----------');
      let newArray = [];
      arrayOfEmployee.filter((employee)=>{
        if (employee.emp_company == 'TCS') {
            newArray.push(' Company : '+employee.emp_company.concat('  Name : ').concat(employee.emp_name));
        }
      });
      console.log(newArray);
      //console.log(newArray[1]);

      console.log('----------: Task No - 2 :----------');
      let averageSalary = 0;
      let count=0;
      arrayOfEmployee.filter((employee)=>{
        if (employee.emp_company == 'Wipro') {
            count++;
            averageSalary+=employee.emp_salary;
        }
      });
      console.log('Average salary of Wipro is : ', averageSalary/count);

      console.log('----------: Task No - 3 :----------');
      let averageSalary1 = 0;
      let count1 = 0;
      arrayOfEmployee.filter((employee)=>{
        if (employee.emp_company == 'Wipro' || employee.emp_company == 'Infy') {
            count1++;
            averageSalary1+=employee.emp_salary;
        }
      });
      console.log('Average salary of Wipro and Infy is : ', averageSalary1/count1);
}
filterMethodAss();
