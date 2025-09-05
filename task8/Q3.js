//3. Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.

const employees = [
  {
    name: "Alice Johnson",
    age: 29,
    salary: 55000,
    position: "Software Engineer",
    department: "IT"
  },
  {
    name: "Bob Smith",
    age: 45,
    salary: 75000,
    position: "Project Manager",
    department: "Operations"
  },
  {
    name: "Charlie Kim",
    age: 32,
    salary: 48000,
    position: "Data Analyst",
    department: "Data Science"
  },
  {
    name: "Diana Lopez",
    age: 38,
    salary: 90000,
    position: "HR Manager",
    department: "Human Resources"
  },
  {
    name: "Ethan Brown",
    age: 26,
    salary: 42000,
    position: "Marketing Associate",
    department: "Marketing"
  }
];

const attri="salary";

function sorting(arr,att){
    return arr.sort(function(a,b){return a[att]-b[att]});
}
console.log(sorting(employees,attri))