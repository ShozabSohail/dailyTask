function calculateSum(n){
    let sum=0;
    let i=1;
    while(i<=n){
     sum+=i;
     i++;

    }
    return sum;
}
let number=10;
let sum23=calculateSum(number);
console.log(sum23);
