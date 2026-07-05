import { myLibrary } from "./local_db.js";
import { bookTable, transformLibraryToTableData } from "./bookDisplay.js";
import { Book } from "./models.js";

export const createBookDialog = document.createElement('dialog');
const dialogText = document.createElement('p');
const closeButton = document.createElement('button');
const addButton = document.createElement('button');
const addBookForm = document.createElement('form');

const bookTitleLabel = document.createElement('label');
bookTitleLabel.innerText = 'Title';
const bookTitleInput = document.createElement('input');

const bookAuthorLabel = document.createElement('label');
bookAuthorLabel.innerText = 'Author';
const bookAuthorInput = document.createElement('input');

const bookPageLabel = document.createElement('label');
bookPageLabel.innerText = 'Pages';
const bookPageInput = document.createElement('input');
bookPageInput.type = 'number'

const bookIsReadTrueRadioButton = document.createElement('input');
bookIsReadTrueRadioButton.type = 'radio';
bookIsReadTrueRadioButton.name = 'isRead';
const bookIsReadTrueRadioButtonLabel = document.createElement('label');
bookIsReadTrueRadioButtonLabel.textContent = "Have Read"


const bookIsReadFalseRadioButton = document.createElement('input');
bookIsReadFalseRadioButton.type = 'radio';
bookIsReadFalseRadioButton.name = 'isRead';
const bookIsReadFalseRadiaButtonLabel = document.createElement('label');
bookIsReadFalseRadiaButtonLabel.textContent = "Haven't Read"

 

closeButton.addEventListener('click', () => {
    createBookDialog.close();
})


addButton.addEventListener('click', () => {
    const newBook = new Book(
        bookTitleInput.value, 
        bookAuthorInput.value,
        String(bookPageInput.value),
        bookIsReadTrueRadioButton.checked
    )
    console.log(newBook);
    myLibrary.push(
    newBook);
    console.log()
    bookTable.setData(transformLibraryToTableData(myLibrary));
    bookTable.get();
    createBookDialog.close();
})


dialogText.innerText = "Create a book";
closeButton.innerText = 'Close';
addButton.innerText = 'Create';


createBookDialog.appendChild(bookTitleLabel);
createBookDialog.appendChild(bookTitleInput);
createBookDialog.appendChild(bookAuthorLabel);
createBookDialog.appendChild(bookAuthorInput);
createBookDialog.appendChild(bookPageLabel);
createBookDialog.appendChild(bookPageInput);

createBookDialog.appendChild(bookIsReadTrueRadioButton);
createBookDialog.appendChild(bookIsReadTrueRadioButtonLabel);
createBookDialog.appendChild(bookIsReadFalseRadioButton);
createBookDialog.appendChild(bookIsReadFalseRadiaButtonLabel);

createBookDialog.appendChild(closeButton);
createBookDialog.appendChild(addButton);
createBookDialog.appendChild(addBookForm);