class Book {
    
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Ebook extends Book {

    fileSize: number;

    constructor(title: string, author: string, year: number, fileSize: number) {
        super(title, author, year);
        this.fileSize = fileSize;
    }
    
    download() {
        if (Number.isFinite(this.fileSize) && this.fileSize > 0) {
            return `${this.title} ${this.fileSize}`
        }
    }
}