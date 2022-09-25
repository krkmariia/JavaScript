let number = +prompt('Введіть число');
console.log('ваше число: ' + number);
if (number % 15 == 0 || number % 5 == 0){
    console.log('чиcло '+ number + ' гарне');
}
if (number % 5 != 0 || number % 15 != 0){
    console.log('чиcло '+ number + ' ну таке собі...');
}



let one = +prompt('Введіть число');
let two = +prompt('Введіть число 2');
let three = +prompt('Введіть число 3');
let total = 0;

if (one < 0){
total +=one; 
}
if (two < 0){
    total +=two; 
    }
if (three < 0){
    total +=three; 
        }
console.log(total);