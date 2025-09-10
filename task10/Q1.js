// Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.
// - Use the class in index file to create few employees and use the functions in class on them
export class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    static sortByName(employees) {
        return employees.slice().sort((a, b) => a.name.localeCompare(b.name));
    }

    static sortBySalary(employees) {
        return employees.slice().sort((a, b) => a.salary - b.salary);
    }
    static ageFilter(employees){
        return employees.slice().filter((a)=>a.age>25);
    }
}