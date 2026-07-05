import { myLibrary } from "./local_db.js";

export class BookTable{
    constructor(headers){
        this.rootTable = document.createElement('table');
        this.tableHeadings = [];
        this.tableData = [];
    }
    setHeading(headingNames){
        for(let headingName in headingNames){
            this.tableHeadings.push(headingNames[headingName]);
        }
    }
    setData(datas){
        this.tableData = [];
        for(let data in datas){
            console.log(datas[data]);
            this.tableData.push(datas[data]);
        }
    }
    get(){
        this.rootTable.innerHTML = '';
        let tempRow = document.createElement('tr');
        for(let heading in this.tableHeadings){
            let tempHeading = document.createElement('th');
            tempHeading.innerText = this.tableHeadings[heading];
            tempRow.appendChild(tempHeading);
            this.rootTable.appendChild(tempRow);
        }
        for(let data in this.tableData){
            let tempTdRow = document.createElement('tr');
            let tempActionCell = document.createElement('actionCell');
            let tempButton = document.createElement('button');
            tempButton.addEventListener('click', () => {
                this.tableData[data][3] = !this.tableData[data][3];
                this.get();
            })
            let tempDeleteActionCell = document.createElement('actionCell');
            let tempDeleteButton = document.createElement('button');
            tempDeleteButton.addEventListener('click', () => {
                this.tableData.splice(data, 1);
                myLibrary.splice(data,1);
                this.get();
            })
            tempButton.textContent = 'toggle';
            tempDeleteButton.textContent = 'delete';
            for (let innerData in this.tableData[data]){
                let tempTableData = document.createElement('td');
                tempTableData.innerHTML = this.tableData[data][innerData];
                tempTdRow.appendChild(tempTableData);
            }
            tempActionCell.appendChild(tempButton);
            tempActionCell.appendChild(tempDeleteButton);
            tempTdRow.appendChild(tempActionCell);
            this.rootTable.appendChild(tempTdRow);
        }
        return this.rootTable;
    }
}


export function transformLibraryToTableData(books){
    let tempTransformed = [];
    for (let bookIndex in books){
        let book = books[bookIndex];
        tempTransformed.push(
            [book['title'], 
            book['author'], 
            book['pages'],
            book['read']],
        );
    }
    return tempTransformed;
}



export const bookTable = new BookTable();