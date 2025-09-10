import { Employee } from "./Q1.js";

const emp1= new Employee("Aman",22,50000)
const emp2= new Employee("riya",42,58000)
const emp3= new Employee("tina",29,27000)
const emp4= new Employee("mina",16,60000)
const emp5= new Employee("tiya",36,6000)
const emp=[emp1,emp2,emp3,emp4,emp5]
console.log(Employee.sortByName(emp))
console.log(Employee.sortBySalary(emp))
console.log(Employee.ageFilter(emp))