//  (1-1 program using all kind of loops)

// 2. Print fibbonaci series upto first 10 numbers.

//--------------USING FOR LOOP---------------------------->

console.log("Fibbonaci series upto 10 using for loops:\n");

let a=0;
let b=1;
let newn;
console.log(`${a}\n${b}`)
for(let i=2;i<10;i++){
    newn=a+b;
    a=b;
    b=newn;
    console.log(newn);
}
//--------------USING WHILE LOOP---------------------------->

console.log("Fibbonaci series upto 10 using WHILE loops:\n");

let x=0;
let y=1;
let nw;
let j=2;
console.log(`${x}\n${y}`)
while(j<10){
    nw=x+y;
    x=y;
    y=nw;
    console.log(nw);
    j++;
}

//---------------USING DO WHILE LOOP----------------------->

console.log("Fibbonaci series upto 10 using DO-WHILE loops:\n");

let u=0;
let v=1;
let n;
let k=2;
console.log(u,v)
do{
    n=u+v;
    u=v;
    v=n;
    console.log(n);
    k++;
}while(k<10)




