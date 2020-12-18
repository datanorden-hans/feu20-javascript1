

/*
    Stack - Heap = minneshantering (RAM)
    Stack = snabb och här finns alla variabler (let const) klarar av mindre storlekar
    Heap = inte lika snabb och använder sig av pekare/ref (var function class, objekt) klarar större storlekar
*/

/* CLASSES */


class Product {
    constructor(name, desc, price, instock) {
        this.name = name
        this.description = desc
        this.price = price
        this.instock = instock
    }

    priceInclVat() {
        return this.price * 1.25
    }
}

const p1 = new Product('product 1', 'this is product 1', 100, true)

