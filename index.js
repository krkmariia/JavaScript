let notesHtml = document.querySelector('#notes')
let btnPost = document.querySelector('#btnPost')
let inputs = { 
    title: document.querySelector('#inputTitle'),
    text: document.querySelector('#inputText'),
    color: document.querySelector('#inputColor'),
    clearInput(){ 
        this.title.value = null 
        this.text.value = null
    },
    getInfo() {
        if(this.title.value.length != 0 && this.text.value.length != 0){
            return {
                title: this.title.value,
                text: this.text.value,
                color: this.color.value
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
        text: 'Зробити дз',
        color: '#FFF',
        timeCreated:{ 
            hours: 10,
            minutes: 20,
            seconds: 25
        }
    }
]

let btnsDelete = []
let btnsChange = []

let genereteNotes = () => { 
    notesHtml.innerHTML = null
    notesStore.map((el,index) => {
        if(!el.statusDelete){
        notesHtml.innerHTML += `
        <div class="noteBlock" id="note${index}" style="background:${el.color}">
            <h2>${el.title}</h2>
            <p id="noteText${index}">${el.text}</p>
            <p class="time">${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
            <button id="btnChange${index}"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/159/159843.png" alt="change"/></button>
            <button class="btnDelete" id="btnDel${index}">Delete</button>
        </div>
        `     
        }
        //console.log(document.querySelector(`#note${index}`))  
      
    })
    for(let i=0;i<=notesStore.length-1;i++){
        if(!notesStore[i].statusDelete){

            btnsDelete[i] = document.querySelector(`#btnDel${i}`)
            btnsDelete[i].addEventListener('click', () => { 
                notesStore[i].statusDelete = true
                genereteNotes()
            })

            btnsChange[i] = document.querySelector(`#btnChange${i}`)
            btnsChange[i].addEventListener('click', () => {
                document.querySelector(`#noteText${i}`).innerHTML = `
                <textarea id="textarea${i}" placeholder="Write new text"></textarea>
                `
                btnsChange[i].innerHTML = `<button id="btnSave${i}"><img class="icon" src="https://cdn-icons-png.flaticon.com/512/7710/7710008.png" alt="change"/></button>`
                document.querySelector(`#btnSave${i}`).addEventListener(
                    'click', 
                    ()=> {
                        let newText = document.querySelector(`#textarea${i}`).value
                        if (newText.length != 0){
                            notesStore[i].text = newText
                        }
                        notesHtml.innerHTML = null
                        genereteNotes()
                    }
                )
            })
        }
    }
}

let getCurrentTime = () => { 
    let time = new Date()
    return { 
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
    }
}

let checkTimeFormat = (time) => { 
    if(time.hours<10){
        time.hours = "0"+time.hours // 1
    }
    if(time.minutes<10){
        time.minutes = "0"+time.minutes
    }
    if(time.seconds<10){
        time.seconds = "0"+time.seconds
    }
    return time
}

let btnPostClick = () => { 
    let timeNow = checkTimeFormat(getCurrentTime())
    if(inputs.getInfo()) { 
        notesStore = [
            ...notesStore, 
            {   
                id: notesStore.length+1,
                title: inputs.getInfo().title,
                text: inputs.getInfo().text,
                color: inputs.getInfo().color,
                timeCreated: {
                    ...timeNow
                }
            }
        ]
        inputs.clearInput()
        genereteNotes()
    } else { 
        alert("Pls, write title or text")
    }
}

genereteNotes()


btnPost.addEventListener('click', btnPostClick)
