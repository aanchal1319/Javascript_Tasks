//1. Create a function that takes a number and prints all even numbers upto that number

let x=50;

function even(n){
    let en="";
    for(let i=1;i<=n;i++){
        if(i%2==0){
            en=en+i+",";
        }
    }
    return en;
}
console.log(even(x))