export function Book(title, author, pages, read){
    if (!new.target) {
        throw ("Yo, use 'new' keyword.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    let didRead = this.read ? "had read" : "not read yet";
    
    this.info = function (){
        return `${this.title} by ${this.author}, ${pages} pages, ${didRead}.`
    }
}