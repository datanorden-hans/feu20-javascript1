function Product(name, price, description) {
    // Product.call(this, productname, price, description)
    this.productName = name
    this.price = price
    this.description = description

    this.summary = function() {
        return `The product ${this.productName} costs ${this.price} kr.`
    }
}

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.summary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`
    }
}



// instans av ett objekt
const product1 = new Product('product 1', 100, 'this is a product description.')
const product2 = new Product('product 2', 100, 'this is a product description.')

const book1 = new Book('Book 1', 'Hans', '2020')
const book2 = new Book('Book 2', 'Tommy', '2015')

console.log(book1)