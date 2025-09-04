//  (1-1 program using all kind of loops)

// 1. Find sum of first 10 natural numbers

//--------------USING FOR LOOP---------------------------->

let count=0;
for(let i=1;i<=10;i++){
    count+=i;
}
console.log(`Sum of first 10 natural number using FOR loop is ${count}`);

//--------------USING WHILE LOOP---------------------------->

let i=0;
let sum=0;
while(i<=10){
    sum+=i;
    i++
};
console.log(`Sum of first 10 natural number using WHILE loop is ${sum}`);

//---------------USING DO WHILE LOOP----------------------->

let j=1;
let total=0;
do{
    total+=j;
    j++;
}while(j<=10);
console.log(`Sum of first 10 natural number using DO WHILE loop is ${total}`);

