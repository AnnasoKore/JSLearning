console.log('---------- Assignment - A ----------');
function mapMethodAss1(array) {
  console.log("-----------: Adding 10 into each element :----------");
  const newArrayWithAdding10 = array.map((value) => {
    return value + 10;
  });
  console.log("Given array is : ", array);
  console.log(
    "After adding 10 into each element, the new array is : ",
    newArrayWithAdding10
  );

  console.log("-----------: Cube of each element of given array :----------");
  const newArrayWithCube = array.map((value) => {
    return value * value * value;
  });
  console.log("Given array is : ", array);
  console.log(
    "Cube of each element, and the new array is : ",
    newArrayWithCube
  );

  console.log(
    "-----------: Adding index value into its corresponding each array element :----------"
  );
  const newArrayWithAddingIndex = array.map((value, index) => {
    return value + index;
  });
  console.log("Given array is : ", array);
  console.log(
    "After adding index value into its corresponding each array element new array is :\n",
    newArrayWithAddingIndex
  );
}
mapMethodAss1([20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]);

console.log('\n---------- Assignment - B ----------');
function mapMethodAss2() {
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

  console.log('----------: Getting the list of all employee names :----------');
  const empNameList = arrayEmployee.map((employee)=>{
    return employee.emp_name;
  });
  console.log('Employee name list  : ',empNameList);

  console.log('----------: Getting the list of departments :----------');
  const empDepartmentList = arrayEmployee.map((employee)=>{
    return employee.emp_dep;
  });
  console.log('Employee department list  : ',empDepartmentList);

  console.log('----------: Getting the list of employee id :----------');
  const empIdList = arrayEmployee.map((employee)=>{
    return employee.emp_id;
  });
  console.log('Employee id list  : ',empIdList);

}
mapMethodAss2();
