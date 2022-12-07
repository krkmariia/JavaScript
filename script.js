let notesHtml = document.querySelector('#notes')
let btnPost = document.querySelector('#btnPost')
let inputs = { 
    title: document.querySelector('#inputTitle'),
    text: document.querySelector('#inputText'),
    getInfo() {
        if(this.title.value.length != 0 && this.text.value.length != 0){
            return {
                title: this.title.value,
                text: this.text.value
            }
        } else { 
            return null
        }
    }
}
let notesStore = [
    {
        id:1,
        title: 'Title 1',
        text: 'Зробити дз'
    }
]


let genereteNotes = () => { 
    notesHtml.innerHTML = null
    notesStore.map((el,index) => {
        notesHtml.innerHTML += `
        <div class="noteBlock" id="note${index}">
            <h2>${el.title}</h2>
            <p>${el.text}</p>
        </div>
        `     
        //console.log(document.querySelector(`#note${index}`))  
        document.querySelector(`#note${index}`)
            .addEventListener("click", ()=>{
                alert(index)
            })
    })
}

let btnPostClick = () => { 
    //console.log(inputs.getInfo() ? inputs.getInfo() : "Write input")
    if(inputs.getInfo()) { 
        notesStore = [
            ...notesStore, 
            {   
                id: notesStore.length+1,
                title: inputs.getInfo().title,
                text: inputs.getInfo().text
            }
        ]
        console.log(notesStore)
        genereteNotes()
    } else { 
        alert("Pls, write title or text")
    }
}

genereteNotes()


btnPost.addEventListener('click', btnPostClick)