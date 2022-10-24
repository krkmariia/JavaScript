// 1
let arr = ['апельсин', 'банан'];
arr.push('яблуко','диня');
console.log(arr);

// 2
let arr1 = ['first','second'];
let arr2 = [3,4];
const newArray = arr1.concat(arr2);
console.log(newArray);

//3
let arrs = ['first','second','third'];
arrs.shift();
console.log(arrs);

//4
let arrick = [1,7,6,4];
const find = 4;
let message;
for (const i of arrick){
if (i == find){
message = 'Елемент знайдено';
break;
}
message = 'Не знайдено';
}
console.log(message);

// 5. 
let arra = [];
let elem;
do {
 elem = +prompt('');
 if (arra.includes(elem) || '' || elem == null){
continue;
 } else {
    arra.push(elem);
 }
} while (elem);
console.log(arra);