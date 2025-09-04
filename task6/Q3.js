// (1-1 program using all kind of loops)

// 3. Print all the keys and values of employee object used in first problem

const employeeDetails={
    fname:"ben ten",
    email:"benten@gmail.com",
    age:33,
    PhoneNo:+123456789,
    address:"india",
    married:false,
    gender:"male",
};

//--------------------USING FOR IN loop-------------->>>

console.log("Using FOR IN loop :")
for(key in employeeDetails){
    console.log(`${key}: ${employeeDetails[key]}`);
};

//----------------------USING FOR OF loop------------>>>

console.log("\n\nUsing FOR OF loop :")

for(const[key,values] of Object.entries(employeeDetails)){
    console.log(key,values);
}