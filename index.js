let list = document.querySelector('#list')
let inputProduct = document.querySelector('#inputForm')
let btnAdd = document.querySelector('#btnAddProduct')
let title = document.querySelector ('h2')

let newProduct = null
let addProduct = () => {
    list.innerHTML += 
    `<li>
    ${newProduct}
    </li>`
}

let keyDownInput = (e) => {
    title.innerHTML = `${e.key}`
}

inputProduct.addEventListener('keydown', keyDownInput)