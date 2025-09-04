//3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself) Anything below 50 is F
let marks=45;
let grade;

switch(true){
  case marks>=85:
    grade="A";
    break;
  case marks>=75:
    grade="B";
    break;
  case marks>=65:
    grade="C";
    break;
  case marks>=50:
    grade="D";
    break;
  default:
    grade="F";
    break;
};

console.log(`Your grade is ${grade}`);