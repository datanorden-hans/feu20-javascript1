/* 
    OBJECTS
    key: value pair (firstName: 'Hans')

    let value = null, [], {}    Allt blir ett objekt
    console.log(typeof value)
*/

    // Javascript Object
    var jsobject = {
        firstName: 'Hans',
        lastName: "Mattin-Lassei",
        age: 36,
        hair: ['blond', 'kort'],
        address: {
            addressline: `Havsörnsgränd 2`,
            zipcode: '12349',
            city: 'Farsta'
        }
    }

    // JSON - Javascript Object Notation
    var json = "{\"firstName\": \"Hans\",\"lastName\": \"Mattin-Lassei\",\"age\": 36,\"hair\": [\"blond\", \"kort\"],\"address\": {\"addressline\": \"Havsörnsgränd 2\",\"zipcode\": \"12349\",\"city\": \"Farsta\"}}"
    var json = `{\"firstName\": \"Hans\",\"lastName\": \"Mattin-Lassei\",\"age\": 36,\"hair\": [\"blond\", \"kort\"],\"address\": {\"addressline\": \"Havsörnsgränd 2\",\"zipcode\": \"12349\",\"city\": \"Farsta\"}}`
    var json = '{"firstName": "Hans","lastName": "Mattin-Lassei","age": 36,"hair": ["blond", "kort"],"address": {"addressline": "Havsörnsgränd 2","zipcode": "12349","city": "Farsta"}}'

    let convertedToJson = JSON.stringify(jsobject)
    // console.log(convertedToJson)

    let convertedFromJson = JSON.parse(json)
    // console.log(convertedFromJson)


    var people = [
        {
            firstName: 'Hans',
            lastName: "Mattin-Lassei",
            age: 36,
            hair: ['blond', 'kort'],
            address: {
                addressline: `Havsörnsgränd 2`,
                zipcode: '12349',
                city: 'Farsta'
            },
            fullAddress: function() {
                return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
            }
        },
        {
            firstName: 'Hans',
            lastName: "Mattin-Lassei",
            age: 36,
            hair: ['blond', 'kort'],
            address: {
                addressline: `Havsörnsgränd 2`,
                zipcode: '12349',
                city: 'Farsta'
            },
            fullAddress: function() {
                return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
            }
        }
    ]


    /* constructor */
    function Address(addressline, zipcode, city) {
        this.addressline = addressline
        this.zipcode = zipcode
        this.city = city
    }

    function Person(firstName, lastName, age, hair, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.hair = hair
        this.address = address

        this.fullAddress = function() {
            return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
        }
    }

    // instansiering
    // const p1 = new Person('Hans','Mattin-Lassei',36,['blond','kort'],{addressline: 'Havsörnsgränd 2', zipcode: '12349', city: 'Farsta'})
    // const p2 = new Person('Tommy','Mattin-Lassei',38,['brun','kort'],{addressline: 'Österled 13', zipcode: '73230', city: 'Arboga'})


    var people = [
        new Person('Hans','Mattin-Lassei',36,['blond','kort'], new Address('Havsörnsgränd 2', '123 49', 'Farsta')),
        new Person('Tommy','Mattin-Lassei',38,['brun','kort'], new Address('Österled 13','73230','Arboga')),
        new Person()
    ]

    console.log(people[0].fullAddress())
    console.log(people)

    var json = JSON.stringify(people)
    console.log(json)

