//Спробувати викликати div єлемент з контентом за допомогою id та class.
// Створити текст у параграфі за допомогою js, та спробувати брати текст з інпути та викликати це натисканням кнопки. 

// let ToDoList = document.getElementsByClassName('ToDoList')
// let btnCreate = document.getElementsByClassName('btnCreate')
// let inputItem = document.getElementsByClassName('inputItem')


let ToDoList = document.getElementById('ToDoList')
let btnCreate = document.getElementById('btnCreate')
let inputItem = document.getElementById('inputItem')

let flag = true

let btnClick = () => { 
    let newBuy = inputItem.value
    if(newBuy.length != 0){
    if(flag){
        let backgroundBlock = "grey"
    } else 
    { 
        let backgroundBlock = "black"
    }
    ToDoList.innerHTML += `<p>${newBuy}</p>`
    inputItem.value = ""
    flag = !flag 
    } else {
        alert('Enter your plans:')
    }
}

btnCreate.onclick = btnClick



// Додаткове завдання: спробувати власноруч написати метод стрічки startsWith та EndsWith.

let str = "hello"
let key = "hel"

let startsWith = (str, key) => {
    if (key.length>str.length){
        return false
    } else {
        if(key.length == str.length){
            let temp = 0
            for(let i=0;i<=key.length-1;i++){
                if(str[i] == key[i]){
                    temp++
                }
            }
            if(temp == str.length){
                return true
            } else {
                return false
            }
        }
    }
    if (key.length<str.length){
        let temp = 0
        for(let i=0;i<=key.length-1;i++){
            if (str[i] == key[i]){
                temp++
            }
        }
        if(temp == key.length){
            return true
        } else {
            return false
        }
    }
}

console.log(startsWith(str,key))