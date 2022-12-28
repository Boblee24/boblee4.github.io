const add_note_button = document.querySelector('#add_note')
const body = document.querySelector('body')
// const note = document.querySelector('#note')
// const note_field = document.querySelector('#note_field')
// const details = document.querySelector('#details')
const container = document.querySelector('.container')


let counter = 1
const full = document.createElement('div')
const exit = document.createElement('img')
const span = document.createElement('span')
const wrapper = document.querySelector('#wrapper')
span.id = ('span')
full.classList.add('flex')
span.classList.add('span')
full.appendChild(span)
full.appendChild(exit)
exit.setAttribute('src', 'Images/xmark-solid.svg')
exit.classList.add('image')
full.classList.add('full_details')
add_note_button.addEventListener('click', addNote)

let noteField;
let result = 0
let view = 10;
let view_details
let noteArray = []
    
function addNote(){
    

    if(note.value == ''){
        alert('Empty')
    }else{

        const main = document.createElement('main')
        const noteNumber = document.createElement('div')
        noteField = document.createElement('div')
        view_details = document.createElement('button')
        main.classList.add('main')
        view_details.id = view++
        noteField.id = result++
        noteField.classList.add('post')
        main.appendChild(noteNumber)
        main.appendChild(noteField)
        main.appendChild(view_details)
        body.appendChild(main)
        noteNumber.textContent = `Note ${counter++}`
        noteField.textContent = note.value
        view_details.textContent = 'View details'
        note.value = ''
        console.log(noteField.id)
        view_details.addEventListener('click', viewDetails)
        noteArray.push(noteField.textContent)
        console.log(noteArray)
    }
    

    function viewDetails(e) {
    // console.log(noteField.dataset)
    console.log('boss')
    console.log(this.target.id)
        // body.appendChild(full)
        // span.textContent = noteField.textContent
        // exit.addEventListener('click', remove)
        // wrapper.classList.add('wrapper')
    
    }
    function remove(){
        body.removeChild(full)
        wrapper.classList.remove('wrapper')
    }
}

