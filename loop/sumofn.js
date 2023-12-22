// sum of all natural number to n
function sumofn(num){
    let sum=0;
    for(let i=0; i<=num;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sumofn(6))
console.log(sumofn(5));
console.log(sumofn(10));

//olternative method

function sumofn2nd(n){
    return (n*(n+1))/2

}
console.log(sumofn2nd(5))
console.log(sumofn2nd(3));