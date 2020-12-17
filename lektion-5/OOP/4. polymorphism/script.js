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
    Polymorphism
    Arv mellan klasser
*/

class Monster {
    constructor(name) {
        this.name = name
    }

    attack() {
        console.log(`The monster ${this.name} is hitting you!`)
    }
}

class FireMonster extends Monster {
    constructor(name) {
        super(name)
    }

    attack() {
        super.attack()
        console.log(`${this.name} is also throwing a fireball at you.`)
    }
}

class WaterMonster extends Monster {
    constructor(name) {
        super(name)
    }

    attack() {
        console.log(`The monster ${this.name} is sending a large wave of water right at you`)
        super.attack()
    }
}

class StoneMonster extends Monster {
    constructor(name) {
        super(name)
    }
}

const fm = new FireMonster('Blazor')
const wm = new WaterMonster('Wateruz')
const sm = new StoneMonster('StoneFace')
fm.attack()
wm.attack()
sm.attack()