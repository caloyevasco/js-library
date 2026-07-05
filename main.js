import { myLibrary } from "./local_db.js";
import { Book } from "./models.js";
import { bookTable, transformLibraryToTableData } from "./bookDisplay.js";
import { createBookDialog } from "./bookForm.js";

const root = document.getElementById('root');


const openModalButton = document.createElement('button');
openModalButton.textContent = 'Add Book'
openModalButton.addEventListener('click', (event) => {
    createBookDialog.showModal();
})

bookTable.setHeading(['Title', 'Author', 'Pages', 'Is Read', 'Set is Read', 'Delete'])

bookTable.setData(transformLibraryToTableData(myLibrary))
const bookTableRoot = bookTable.get();

root.appendChild(createBookDialog)
root.appendChild(openModalButton)
root.append(bookTableRoot);

