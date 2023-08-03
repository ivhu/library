let myLibrary = [];

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

const formContainer = document.getElementById('form-container');
const form = document.getElementById('form');

function closeForm() {
    formContainer.style.display = "none";
}

function openForm() {
    formContainer.style.display = "flex";

    form.style.display = "grid";
    document.getElementById('btns').style.display = "flex";

    document.getElementById('title').focus();

}

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => addBookToLibrary());


function addBookToLibrary() {
    event.preventDefault();
    let book = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('read').checked);
    if (book.title !== "" && book.author !== "") {
        myLibrary.push(book);
        updateLibrary(book);
        form.reset();
    }
}

let table = document.getElementById('table');

function updateLibrary(book) {
    let tr = document.createElement('tr');

    let title = document.createElement('td');
    title.textContent = book.title;

    let author = document.createElement('td');
    author.textContent = book.author;

    let read = document.createElement('td');
    let readStatusBtn = document.createElement('button');
    readStatusBtn.classList.add('status');
    if (book.read) {
        readStatusBtn.textContent = 'Read';
        readStatusBtn.style.backgroundColor = '#4ade80';
    } else {
        readStatusBtn.textContent = 'Not Read';
        readStatusBtn.style.backgroundColor = '#f43f5e';


    }
    readStatusBtn.addEventListener('click', () => {
        if (book.read) {
            book.read = false;
            readStatusBtn.textContent = "Not Read";
            readStatusBtn.style.backgroundColor = '#f43f5e';
        } else {
            book.read = true;
            readStatusBtn.textContent = "Read";
            readStatusBtn.style.backgroundColor = '#4ade80';
        }
    }
    );
    read.appendChild(readStatusBtn);

    let removeBook = document.createElement('td');
    removeBook.classList.add('removeCell');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.textContent = "Remove book"
    removeBook.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        removeBtn.parentNode.parentNode.remove();

    })

    tr.append(title, author, read, removeBook);
    table.appendChild(tr);
}