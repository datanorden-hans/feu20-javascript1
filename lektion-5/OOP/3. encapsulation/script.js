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
    Encapsulation 
    Getters/Setters (read/write)
*/

/* utan getters och setters - detta ska undvikas */
    // class Person {
    //     constructor(firstname, lastname) {
    //         this.firstName = firstname
    //         this.lastName = lastname
    //     }

    //     fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }

    // const p1 = new Person('Hans', 'Mattin-Lassei')
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName())

    // p1.fullName = 'Joakim Wahlström'
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName)




/* getter */
    // class Person {
    //     constructor(firstname, lastname) {
    //         this.firstName = firstname
    //         this.lastName = lastname
    //     }

    //     get fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }

    // const p1 = new Person('Hans', 'Mattin-Lassei')
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName)

    // p1.fullName = 'Joakim Wahlström'
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName)


/* setter */
    // class Person {
    //     constructor(firstname, lastname) {
    //         this.firstName = firstname
    //         this.lastName = lastname
    //     }

    //     get fullName() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    //     set fullName(_value) {
    //         const parts = _value.split(' ')
    //         this.firstName = parts[0]
    //         this.lastName = parts[1]
    //     }
    // }

    // const p1 = new Person('Hans', 'Mattin-Lassei')
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName)

    // p1.fullName = 'Joakim Wahlström'
    // console.log(p1.firstName)
    // console.log(p1.lastName)
    // console.log(p1.fullName)


/* setter */
    class Person {
        constructor(firstname, lastname) {
            this.firstName = firstname
            this.lastName = lastname
            
        }

        get fullName() { return `${this.firstName} ${this.lastName}`}

    }

    const p1 = new Person('Hans', 'Mattin-Lassei')
    console.log(p1.fullName)

    p1.fullName = "Joakim Wahlström"
    console.log(p1.fullName)
