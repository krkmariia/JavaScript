let number = +prompt('enter number n');
let sum = 0;
console.log(number);
for (let i = number; i > 0; i--){
    if (number % i == 0){
        sum+=i;
    }
}
console.log(sum);


let number1 = +prompt('enter number 1:');
let number2 = +prompt('enter number 2:');
let count = 0;
console.log(number1, number2);
for (let i = number1; i <= number2; i++){
if (((i**3 % 10) ==4)|| ((i**3 % 10) ==9)){
    count++;
}
}
console.log(count);

