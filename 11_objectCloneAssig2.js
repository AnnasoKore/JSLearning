function shallowClone(array) {
    let cloneArrayNums=array;
    console.log(`Original array - ${array}`);
    cloneArrayNums.push([55,66]);
    console.log(`After Adding 55, 66 in cloned array - ${cloneArrayNums}`);
}
//shallowClone([20,3,4,56,90,400,49]);
//deepCloning([20,3,4,56,90,400,49]);
function deepCloning(array) {
    let cloneArray=[...array];
    array.push([10,25]);
    console.log(`After Adding 10, 25 in original array - ${array}`);
    console.log(`Cloned array - ${cloneArray}`);

    let evenArray=[2,30,14,8];
    let mergeArray1=[...array,evenArray];
    console.log(`Merge array using spread operator - ${mergeArray1}`);
    let mergeArray2=array.concat(evenArray);
    console.log(`Merge array using concat() method - ${mergeArray2}`);
}
//objectCloning();
function objectCloning() {
    const employee_info={
        emp_id : '27',
        emp_name : 'John Doe',
        salary : {
            july_month : '40000INR',
            aug_month : '50000INR',
            jun_month : '65000INR',
        },
        address : {
            locality : {
                colony : 'Om Vrindavan Society',
                street : 'Kanch Pokli, 431202',
            },
            city : 'Mumbai',
            state : 'Maharashtra',
            country : 'India',
            mobile_No : ['+91 8600 3456 88','1800 4567 32','+91 9096 5678 77']
        }
    }
    //console.log(`Employee address - ${employee_info.address.locality}`);    
    console.log('Employee address - ',employee_info.address.locality);
    //console.log('Employee address - '+employee_info.address.locality);
    console.log(`Employee city - ${employee_info.address['city']},  Employee state - ${employee_info.address.state},  Employee Country - ${employee_info.address.country}`);
    console.log(`Mobile number - ${employee_info.address.mobile_No} `);

    let cloneEmployeeInfo = JSON.parse(JSON.stringify(employee_info));
    cloneEmployeeInfo.salary.july_month="80000INR";
    employee_info.address.country="UK";
    // console.log(cloneEmployeeInfo.salary.july_month);
    // console.log(employee_info.address.country);
    console.log(`Original object - ${employee_info} \nCloned object - ${cloneEmployeeInfo}`);
    console.log("Original object - Employee Info :",employee_info, "\nEmployee salary : ",employee_info.salary, "\nEmployee address : ",employee_info.address);
    console.log("Cloned object - Employee Info :",cloneEmployeeInfo, "\nEmployee salary : ",cloneEmployeeInfo.salary, "\nEmployee address : ",cloneEmployeeInfo.address);
}

function factorialNumber(num) {
    let sum=1;
    for (let index = num; index >=1; index--) {
        sum=sum*index;
    }
    console.log(`Factorial of given number ${num} is - ${sum} `);
}
factorialNumber(5);
factorialNumber(9);
factorialNumber(11);
factorialNumber(7);