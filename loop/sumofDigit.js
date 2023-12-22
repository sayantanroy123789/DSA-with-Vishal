// sum of digit of a number

// 1647=1+6+4+7  % give us reminder that will add with sum and number / by 10 to get new number
function sumofDigit(num){
    let sum=0;
    while(num>0){
        sum=sum+(num%10)
        num=Math.floor(num/10)
    }
    return sum;

}
console.log(sumofDigit(123))
console.log(sumofDigit(1647))