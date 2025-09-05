//2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.

const employees = [
  { name: "Alice John", email: "alice.john@example.com", age: 28 },
  { name: "Bob Smith", email: "bob.smith@example.com", age: 35 },
  { name: "Carol White", email: "carol.white@example.com", age: 30 },
  { name: "David Brown", email: "david.brown@example.com", age: 55 },   
  { name: "Emma Davis", email: "emma.davis@example.com", age: 76 },
  { name: "Frank Miller", email: "frank.miller@example.com", age: 61 }, 
  { name: "Grace Lee", email: "grace.lee@example.com", age: 24 },
  { name: "Henry Wilson", email: "henry.wilson@example.com", age: 31 },
  { name: "Isla Moore", email: "isla.moore@example.com", age: 29 },
  { name: "Jack Taylor", email: "jack.taylor@example.com", age: 52 },   
  { name: "Leo Thomas", email: "leo.thomas@example.com", age: 27 },
  { name: "Mia Martin", email: "mia.martin@example.com", age: 49 }
];

let n=30;

function checkAge(arr,x){
    return arr.filter(employees=>employees.age<x);
}
console.log(checkAge(employees,n))