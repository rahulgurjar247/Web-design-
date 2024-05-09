const login = document.querySelector('.buttonLogin')
const addButton = document.querySelector('.addButton')
const form = document.querySelector('.form')
const body = document.querySelector('html')
const removebutton = document.querySelector('#removeform')

const readOrNot = document.querySelector('.readOrNot')

const submitbtn = document.querySelector("#submitbtn")
const libraryarea=  document.querySelector(".gridarea")

let library = [] ;



submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;    
    const page = parseInt(document.querySelector('#page').value);
    const newbook = new book(title, author, page)
    library.push(newbook)

    display()
    
})

function book(btitle, bauthor, bpage) {
    this.id = new Date().setMilliseconds;
    this.title = btitle;
    this.author = bauthor;
    this.page = bpage;
     
}


function display() {

    libraryarea.innerHTML = '';
    library.forEach((book,index) => {
        let card = document.createElement('div')
        card.dataset.index = index   
        card.classList.add('card-box');

        let cardtitle = document.createElement('div')
        cardtitle.textContent = `Title:"${book.title}"`;

        let cardauthor = document.createElement('div');
        cardauthor.textContent = `Title:"${book.author}"`;

        let cardpage = document.createElement('div')
        cardpage.textContent = `Title:"${book.page}"`;

        let cardread = document.createElement('div')
        cardread.classList.add("readOrNot")
        cardread.textContent = `Read`;
        
        let carddelete = document.createElement('div')
        carddelete.textContent = 'Delete'
        carddelete.addEventListener('click', () => {
            deletebook(index)
        })
        
        card.appendChild(cardtitle)
        card.appendChild(cardauthor)
        card.appendChild(cardpage)
        card.appendChild(cardread)
        card.appendChild(carddelete)
        libraryarea.appendChild(card)

    })
} 


function deletebook(index) {
    library.filter(library[index] != library[index])
}






























addButton.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = "block"

    } else {
        form.style.display = "none"
    }
})

removebutton.addEventListener("click", (event) => {
    event.preventDefault();

    form.style.display = "none"

})


readOrNot.addEventListener('click', () => {
    if (readOrNot.textContent=="Read") {
        readOrNot.textContent = "un Read";
        readOrNot.style.backgroundColor = "red"
        alert('working')
    }
    else {
        readOrNot.textContent = "Read";
        readOrNot.style.backgroundColor = "blue"
    }
})






