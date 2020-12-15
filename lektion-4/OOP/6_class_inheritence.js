class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        return `${this.name} makes a generic sound!'`
    }
}

class Dog extends Animal {
    constructor(name, year) {
        super(name)
        this.year = year
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    spinning() {
        return `${this.name} spins!`
    }
}

const dog = new Dog('doggi', 3)
const cat = new Cat('cati')
console.log(dog.makeSound())
console.log(dog.year)
console.log(cat.makeSound())
console.log(cat.spinning())
console.log(cat)