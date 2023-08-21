function demoOfJSON() {
    const dataJSON = `{
        "name" : "Alex Melon",
        "id" : "E00245",
        "role" : ["Dev", "DBA"],
        "age" : 25,
        "doj" : "11-12-2019",
        "married" : false,
        "address" : {
            "street" : "32, laham ST",
            "city" : "Innsbruck",
            "country" : "Austria"
        },
        "referred-by" : "E0012"
    }`;
console.log(dataJSON);
console.log("\n"+typeof dataJSON);
let jsonObject=JSON.parse(dataJSON);
console.log("\n"+typeof jsonObject);
console.log(`'${jsonObject.role[0]}'`);
let array=jsonObject.name.split(" ");
console.log(`'${array[1]}'`);
let array1=jsonObject.doj.split("-");
console.log(array1[2]);
}
demoOfJSON();
    