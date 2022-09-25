// const dateOfBirth = 1984 ;
// let currentYear = 2022 ;
// let age = currentYear - dateOfBirth ;
// console.log('Введене число = ' + dateOfBirth);
// console.log('Наступне = ' + currentYear);
// console.log('Наступне = ' + age);

const dateOfBirth = 1984 ;
let currentYear = 2022 ;
let age = currentYear - dateOfBirth ;
console.log(age);


let first = prompt('Введіть число');
let second = + first + 1;
let third = + second + 1;
console.log('Введене число:' + first);
console.log('Наступне число:' + second);
console.log('Наступне число:' + third);


// let userChois = confirm ('Чи бажаєте ви банку варення?');
// alert(userChois);

// V = a ^ 3, S = 6 a ^ 2;

// let side = prompt("Введіть ребро куба");
// console.log("Введене ребро : " + side);
// console.log("О`бєм куба : " + side **3); 
// console.log("Площа поверхні : " + 6 * side ** 2);

// let n = prompt("Введіть число");
// console.log("Введене число:" + n);
// let one = number % 10;
// let ten = Math.floor ((number % 100)/10);
// let hund = Math.floor ((number % 1000)/100);
// console.log ("Сума цифр :" + (one + hund + ten));
// console.log ("Добуток :" + one * ten * hund);

// let a = prompt ("Введіть значення катета а");
// let b = prompt ("Введіть значення катета b");
// let c = Math.sqrt(a ** 2 + b ** 2);
// alert(c);

// let salary = +prompt ("Введіть вашу зп");
// salary += salary * 0.15;
// console.log(salary);
// salary -= salary * 0.1;
// console.log(salary); 


// alert("Задумайте число");
// alert("Помножте число на 2");
// alert("Додайте до отриманного результату 7");
// let one = +prompt ("Введіть результат");
// alert("ви задумали число :" + (one - 7)/2);

// const dota = 'random seed';
// console.log(Number(dota)); //NaN - not a number
// console.log(typeof Number(dota));
//Number.parseInt()
//Number.parseFloat()
// console.log(Number.parseInt('9fhdbe6'));
// console.log(Number.parseFloat('9fhdbe6'));
// const number = ('61');
// console.log(Number.isNaN(number));

// const number = Number('dhjfk98fha');
// console.log(Number.isNaN(number));

// 0.1 + 0.5 not 0.6;
//Math
// console.log(Math.Floor); // 1 - отримати цілу частину, округлює до цілого 
// console.log(Math.ceil(1.2)); //2 - отримати дробову частину
// console.log(Math.round(1.2)); // 1 - звичайне округлення, як в матем
// console.log(Math.max(20, 0, 4859, 47, 857664));
// console.log(Math.min(20, 0, 4859, 47, 857664)); - максимальне, мінімальне, працює з дробами
// console.log(Math.pow(4, 3)); - підносить у степінь 
// console.log(Math.random()); - рандомне число від 0 до 1;
// console.log(Math.random() * (10000 - 1) + 1);
// const name = 'apple';
// //Конкатенація 
// const word = 'окуляри' + 'піджак';
// console.log(word);

// let brandon;
// brandon = 2 + '2';
// console.log(brandon); // '22' - це символ
// console.log(typeof brandon); // char - тип, який зберігає окремі символи, наприклвд 'a', '9';

// const message = 'Зелений = перемога';
// console.log(message.length);
// false - 0, Null, undefined, null, '', "";
// True - 
// Логічне і - &&;
// true + true = true;
// false + true = false;
// || - логічне або, якщо є 1 true - це правда
// Логічне не 
// console.log(!1); //0
// console.log(!true);//false
//Bool - true/false

// let num = 7;
// if (num > 8) {
//     console.log('Текст, якщо правда');
// }
// else{
//     console.log('Текст, якщо неправда');
// }

// let rok;
// const pop = 'punk';
// if(pop === 'punk'){
//     rok = 0;
// }
// else if (pop === 'pop'){
//     rok = 12;
// }
// else {
//     rok = 4;
// }

// console.log(rok);


// Тернарний оператор
//   const two = 10;
//   const one = two <= 18 ? 'Hello' : 'good';
//   console.log(one);

// const allow = 18;
// const age = allow >= 18? 'allowed' : 'not allowed';
// console.log(age);

// let age = +prompt ('Введіть аш вік');
// if (age <=18){
//     alert('ви маленький')
// }
// else{
//     alert ('ви дорослий');
// }

// let number = +prompt('Введіть число');
// console.log('ваше число' + number);
// if (number % 2 == 0){
//     console.log('чиcло'+ number + 'парне');
// }
// if (number % 2 != 0){
//     console.log('чиcло'+ number + 'непарне');
// }

// let pass1 = prompt("Введіть пароль : ");
// if (pass1.length < 8){
//     alert("Введіть хоча би 8 символів");
//     let pass2 = prompt("Підтвердіть пароль : ");
// if (pass1 == pass2){
//  alert("Пароль прийнято");
// }
// else if (pass1 != pass2) {
//     alert("Пароль не прийнято, спробуйте ще раз");
// }
//     }

// let number1 = +prompt('Введіть число');
// let number2 = +prompt('Введіть число 2');
// let number3 = +prompt('Введіть число 3');
// console.log("введене число 1:" + number1);
// console.log("введене число 2:" + number2);
// console.log("введене число 3:" + number3);
// let total = 0;

// if (number1 > 0){
// total +=number1; // total = total + number;
// }
// if (number2 > 0){
//     total +=number2; // total = total + number;
//     }
// if (number3 > 0){
//     total +=number3; // total = total + number;
//         }
// console.log(total);


// let number = +prompt('Введіть число');
// console.log('ваше число: ' + number);
// if (number % 15 == 0 || number % 5 == 0){
//     console.log('чиcло '+ number + ' гарне');
// }
// if (number % 5 != 0 || number % 15 != 0){
//     console.log('чиcло '+ number + ' ну таке собі...');
// }

// let one = +prompt('Введіть число');
// let two = +prompt('Введіть число 2');
// let three = +prompt('Введіть число 3');
// let total = 0;

// if (one < 0){
// total +=one; 
// }
// if (two < 0){
//     total +=two; 
//     }
// if (three < 0){
//     total +=three; 
//         }
// console.log(total);


// let number = prompt('Введіть чотиризначне число');
// console.log(number);
// let one = number % 10; //0
// let ten = Math.floor((number % 100) / 10);
// let hunt = Math.floor((number % 1000) / 10);
// let thousend = Math.floor(number % 1000);
// if (one + thousend == hund - ten){
//     alert('так')
// }
// else {
//     alert('ні');
// }


//5931
// let number = prompt('Введіть чотризначне число');
// console.log(number);
// let one = Math.floor(number % 10);
// let tens = Math.floor((number % 100) / 10);
// let hund = Math.floor((number % 1000) / 100);
// let thos = Math.floor((number % 10000) / 1000);
// if (one + thos == hund - tens){
//     alert('Так');
// }
// else{
//     alert('Ні');
// }


//           SWITCH

// let start;
// let bulba = prompt('Введіть слово');
// switch(bulba){
//     case 'Bandera' : 
//     start = 0;
//     break
//     case 'Taras' :
//         start = 10;
//         break
//         case 'lol' :
//             start = 77;
//             break
//     default: 
//     console.log('Ви ввели невалідне значення');
// }

// console.log(start);  

// const one = 10;
// if (1) {
//     console.log('hello', one);
// }
// console.log('hello 2', one);

// let one = 4;
// while (one < 10) {
// one ++;
// }

// console.log(one);

// let one = 4;
// do {
// one ++;
// console.log(one);
// }
// while (one < -98); //do while - виконує дію після do, потім перевіряє умову

// const max = 10;
// for (let i = 0; i < 10; i ++){ //задаємо змінну, з якої почин цикл, потім умову, потім один крок (що робиться)
// console.log(i);
// }

// let count = +prompt('Введіть к-сть бажаних чисел:');
// let i = count;
// let rand;
// while (i > 0) {
//     rand = Math.floor(Math.random()*100);
//     console.log(`Random number ${count - i + 1} : ${rand}`);
//     i --;
// }


// 5931
// let number = prompt('Введіть чотризначне число');
// console.log(number);
// let one = number % 10; // % - залишок від ділення
// let tens = Math.floor((number % 100) / 10);
// let hund = Math.floor((number % 1000) / 100);
// let thos = Math.floor((number % 10000) / 1000);
// if (one + thos == hund - tens){
//     alert('Так');
// }
// else{
//     alert('Ні');
// }

