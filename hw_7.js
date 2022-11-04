//Створити об'єкт, який буде описувати вас, створити не менше 5 ключів, вставити туди не менше двох функцій того, що ви вмієте робити. 



// Якщо поверхня достатньо тверда (4+) і слабкий вітер (сила вітру менше 10), то Марія може стояти на голові і руках;
let key = 'Mariia can stand on her head and hands:)';
let second_key = 'Reading, traveling and doggy training';
let Mariia = {
    arts: 'drawing, sculpting, singing, dancing, filmig, creating',
    languages: 'Ukrainian, rus(unfortunatly), english and Deutsch', 
    coding: 'HTML, CSS, JS',
    hobbies: function(){
    return console.log(second_key);
    },
    stranges: function(a, b){
        let h = +prompt ('Enter surface hardness: (where less than 4 its soft and more than 4 its hard)');
        let c = +prompt ('Enter the wind power: (where less than 10 its not strong and more than 10 its strong)');
        a = h;
        b = c;
        if (a > 4 || b < 10){
        return console.log(key);
        } else {
            return console.log('Its not a favorable enviroment for a such things:/');
        }
    }
}
console.log(Mariia.stranges(), Mariia.hobbies()); 
let values = Object.values(Mariia);
console.log(values);