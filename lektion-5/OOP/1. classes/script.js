

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



class Person {
    constructor(firstname, lastname) {
        this.firstName = firstname
        this.lastName = lastname
    }

    displayName() {
        return `${this.firstName} ${this.lastName}`
    }
}



class Teacher extends Person {
    constructor(firstname, lastname, teacherid, skills) {
        super(firstname,lastname)
        this.teacherId = teacherid
        this.skills = skills
    }

    displaySkills() {
        this.skills.forEach(skill => {
            console.log(skill)
        })
    }
}

class Student extends Person {
    constructor(firstname, lastname, studentid) {
        super(firstname, lastname)
        this.studentId = studentid
    }
}

const t1 = new Teacher('Hans', 'ML', 1, ['Javascript', 'C#'])
console.log(t1.displayName())
t1.displaySkills()

const s1 = new Student('Johan', 'Forsman', 1)
console.log(s1.displayName())