function Animal(name) {
    this.name = name
}
Animal.prototype.makeSound = function() {
    return `${this.name} makes a generic sound!'`
}


function Dog(name, year) {
    Animal.call(this, name)
    this.year = year
}

function Cat(name, year) {
    Animal.call(this, name)
    this.year = year
}


// Inherit prototype
Dog.prototype = Object.create(Animal.prototype)
Cat.prototype = Object.create(Animal.prototype)

// Using the right constructor
Dog.prototype.constructor = Dog
Cat.prototype.constructor = Cat

Cat.prototype.spinning = function() {
    return `${this.name} spins!`
}


const dog = new Dog('doggi', 4)
const cat = new Cat('cati', 2)
console.log(dog.makeSound())
console.log(cat.makeSound())
console.log(cat.spinning())
console.log(cat)

const cat2 = new Cat()