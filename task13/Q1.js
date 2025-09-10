// - Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.
import { Employee } from "/home/tech-2/Desktop/javascript_training/task10/Q1.js";
const emp1= new Employee("Aman",22,50000)
const emp2= new Employee("riya",42,58000)
const emp3= new Employee("tina",29,27000)
const emp4= new Employee("mina",16,60000)
const emp5= new Employee("tiya",36,6000)
function getEmployee(){
    return new Promise((resolve)=>{
        const delay=Math.floor(Math.random()*1000)+1000;

        setTimeout(()=>{
            const emp=[emp1,emp2,emp3,emp4,emp5];
            resolve(emp);
        },delay);
    });
}

async function showEmployees() {
  try {
    const emp = await getEmployee(); 
    console.log("Employees:", emp);
  } catch (err) {
    console.error("Error:", err);
  }
}
showEmployees()

