//Create a function that prints numbers from m to n after 100ms each. m and n should be taken as paramter in function
let a=2;
let b=10

function printN(m,n){
   let curr=m;
   let printer=setInterval(()=>{
    console.log(curr);
    curr++;
    if(curr>n)clearInterval(printer);
   },100)
}
printN(a,b)
