//  - Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
import { Employee } from "/home/tech-2/Desktop/javascript_training/task10/Q1.js";
const emp1= new Employee("Aman",22,50000)


try{
    let x =emp1.age/null;
     if (!isFinite(x)) {  
      throw new Error("Invalid division by null");
    } 
}
catch(err){
    let y=emp1.age/2;
    console.log(y);
    console.log(err.message)
}

