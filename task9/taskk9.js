import {employees} from './task9.js'
import { filterEmployeesByName } from './Q2.js'

console.log(filterEmployeesByName(Object.values(employees)))

const highEarners = Object.values(employees).filter(emp => emp.salary > 500000);

// Step 3: Convert salary to Lacs and print up to 1 decimal place
highEarners.forEach(emp => {
  const salaryInLac = (emp.salary / 100000).toFixed(1);
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ₹${salaryInLac} Lac`);
});