const body = document.querySelector('body')
const container = document.querySelector('.container')
const wrapper = document.querySelector('#wrapper')
const addButton = document.querySelector('#add_note')
let field;
let section;
let counter = 1;
const note = document.querySelector('#note')
// field.innerHTML = ` <div class="note-number">Note <span id="note_number"></span></div>
// <div class="notefield">No note has been added yet</div>
// `

console.log('Heloo')

addButton.addEventListener('click', addNote)

function addNote() {
    // const hello = document.createElement('main')
    // console.log('Hello world')
    if(note.value == ''){
        alert('The Note field is empty')
    }
    else{
        field = document.createElement('main')
        // container.removeChild(field)
        field.innerHTML = `<div class="note-number">Note <span id="note_number"></span></div>
    <div class="notefield">No note has been added yet</div>
    <button id="view_details">View details</button>
    `
    field.querySelector('.notefield').textContent = note.value
    field.querySelector('#note_number').textContent = counter++

    container.appendChild(field)
    }
    note.value = ''
    // field.querySelector('#view_details')
    field.querySelector('#view_details').addEventListener('click', view)
}

function view (){
    section = document.createElement('section')
    section.innerHTML = `<div id="full" class="full_details">
    <span id="span"></span>
    <img src="Images/xmark-solid.svg" class="image" alt="">
    </div>`
    container.appendChild(section)
    section.querySelector('span').textContent = field.querySelector('.notefield').textContent
    let exit = section.querySelector('.image')
    exit.addEventListener('click', remove)
}
function remove(){
    container.removeChild(section)
    wrapper.classList.remove('wrapper')
}