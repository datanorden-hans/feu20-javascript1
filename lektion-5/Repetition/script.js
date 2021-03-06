/* 
    OBJECTS
    key: value pair (firstName: 'Hans')

    let value = null, [], {}    Allt blir ett objekt
    console.log(typeof value)
*/

    // Javascript Object
    // var jsobject = {
    //     firstName: 'Hans',
    //     lastName: "Mattin-Lassei",
    //     age: 36,
    //     hair: ['blond', 'kort'],
    //     address: {
    //         addressline: `Havsörnsgränd 2`,
    //         zipcode: '12349',
    //         city: 'Farsta'
    //     }
    // }

    // JSON - Javascript Object Notation
    // var json = "{\"firstName\": \"Hans\",\"lastName\": \"Mattin-Lassei\",\"age\": 36,\"hair\": [\"blond\", \"kort\"],\"address\": {\"addressline\": \"Havsörnsgränd 2\",\"zipcode\": \"12349\",\"city\": \"Farsta\"}}"
    // var json = `{\"firstName\": \"Hans\",\"lastName\": \"Mattin-Lassei\",\"age\": 36,\"hair\": [\"blond\", \"kort\"],\"address\": {\"addressline\": \"Havsörnsgränd 2\",\"zipcode\": \"12349\",\"city\": \"Farsta\"}}`
    // var json = '{"firstName": "Hans","lastName": "Mattin-Lassei","age": 36,"hair": ["blond", "kort"],"address": {"addressline": "Havsörnsgränd 2","zipcode": "12349","city": "Farsta"}}'

    // let convertedToJson = JSON.stringify(jsobject)
    // // console.log(convertedToJson)

    // let convertedFromJson = JSON.parse(json)
    // // console.log(convertedFromJson)


    // var people = [
    //     {
    //         firstName: 'Hans',
    //         lastName: "Mattin-Lassei",
    //         age: 36,
    //         hair: ['blond', 'kort'],
    //         address: {
    //             addressline: `Havsörnsgränd 2`,
    //             zipcode: '12349',
    //             city: 'Farsta'
    //         },
    //         fullAddress: function() {
    //             return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
    //         }
    //     },
    //     {
    //         firstName: 'Hans',
    //         lastName: "Mattin-Lassei",
    //         age: 36,
    //         hair: ['blond', 'kort'],
    //         address: {
    //             addressline: `Havsörnsgränd 2`,
    //             zipcode: '12349',
    //             city: 'Farsta'
    //         },
    //         fullAddress: function() {
    //             return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
    //         }
    //     }
    // ]


/* 
    CONSTRUCTOR 
*/
    // function Address(addressline, zipcode, city) {
    //     this.addressline = addressline
    //     this.zipcode = zipcode
    //     this.city = city
    // }

    // function Person(firstName, lastName, age, hair, address) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    //     this.age = age
    //     this.hair = hair
    //     this.address = address

    //     this.fullAddress = function() {
    //         return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
    //     }
    // }

    // instansiering
    // const p1 = new Person('Hans','Mattin-Lassei',36,['blond','kort'],{addressline: 'Havsörnsgränd 2', zipcode: '12349', city: 'Farsta'})
    // const p2 = new Person('Tommy','Mattin-Lassei',38,['brun','kort'],{addressline: 'Österled 13', zipcode: '73230', city: 'Arboga'})


    // var people = [
    //     new Person('Hans','Mattin-Lassei',36,['blond','kort'], new Address('Havsörnsgränd 2', '123 49', 'Farsta')),
    //     new Person('Tommy','Mattin-Lassei',38,['brun','kort'], new Address('Österled 13','73230','Arboga'))
    // ]

    // console.log(people[0].fullAddress())
    // console.log(people)

    // var json = JSON.stringify(people)
    // console.log(json)


/* 
    PROTOTYPE (__proto__)
*/

function Person(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName

    this.correctNames()
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.correctNames = function() {
    this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1)

    const lastnames = this.lastName.split(' ')
    this.lastName = ''

    lastnames.forEach(name => {
        
        if(name.includes('-')) {
            let parts = name.split('-')
 
            for(let i = 0; i < parts.length; i++) {
               parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1)
            }

            let newName = ''; 

            parts.forEach(part => {          
                if(newName === "")
                    newName = part
                else 
                    newName += '-' + part
            })

            name = newName
            this.lastName += `${name} `

        } else {
            name = name.charAt(0).toUpperCase() + name.slice(1)
            this.lastName += `${name} `
        }
            
    });


}

const p1 = new Person('hans', 'karlsson mattin-lassei-andersson-adreasson ekberg')
console.log(p1.fullName())
