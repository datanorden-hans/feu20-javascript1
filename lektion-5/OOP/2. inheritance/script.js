/* 
    4 pelare inom Objektorienterad programmering (OOP)
     * Encapsulation
     * Inheritance
     * Polymorphism
     * Abstraction
     
     JS
     * Encapsulation
     * Inheritance
     * Polymorphism    
    
    -------------------------

     <= ES5
     * Inheritance

     >= ES6
     * Encapsulation
     * Polymorphism  
*/


/* 
    Inheritance
    Arv mellan klasser
*/

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