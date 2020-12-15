function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.revised = false
}

Book.prototype.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
}

Book.prototype.bookAge = function() {
    const years = new Date().getFullYear() - this.year
    
    switch(years) {
        case 0 :
            return `${this.title} less then 1 year old.`
        case 1 :
            return `${this.title} is 1 year old.`
        default :
            return `${this.title} is ${years} years old.`       
    }
}

Book.prototype.revise = function(year) {
    this.year = year
    this.revised = true
}


const book1 = new Book('Book 1', 'Hans', '2010')
book1.revise('2015')
// console.log(book1)


function printRevicedBooks(book) {
    if(book.revised)
        console.log('the book is revised')
}

let year = 2010
const books = []

for(let i=0; i<3;i++) {
    let book = new Book(`Book ${i+1}`, `Author ${i+1}`, year)
    year += 3

    if(i === 1)
        book.revise(`${year + 1}`)

    books.push(book)
}


books.forEach((book) => {

    console.log(book.revised)

    if(book.revised === true) 
        console.log('boken är uppdaterad')
    else if(book.revised === false)
        console.log('boken är inte uppdaterad')
})