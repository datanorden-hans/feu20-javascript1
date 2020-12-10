/* DATA TYPES  */

    /* object - object innehåller ett eller flera värden */
    // person = {}
    // var person = {}
    // let person = {}
    // const person = {}
    // console.log(typeof person)

    // används för klasser, objekt och json
    // använder sig av key:value pairs

    // JS Object
    // var person = {
    //     firstName: 'Hans',
    //     lastName: 'Mattin-Lassei'
    // }

    // JS Object
    // var person = {
    //     "firstName": "Hans",
    //     "lastName": "Mattin-Lassei"
    // }

    // JSON Object
    // var json = '{ "firstName": "Hans", "lastName": "Mattin-Lassei"}'

    // convert to json
    // var json = JSON.stringify(person)
    // console.log(json)

    // convert to js object
    // var person = JSON.parse(json)
    // console.log(person)

    // var person = {
    //     firstName: 'Hans',
    //     lastName: "Mattin-Lassei",
    //     age: 36,
    //     face: {
    //         hair: "blond",
    //         eyes: "blå"
    //     },
    //     isEnabled: true,
    //     height: 165.3,
    //     fullName: function() {
    //         // return this.firstName + " " + this.lastName
    //         return `${this.firstName} ${this.lastName}`
    //     },
    //     favoColors: ["yellow","green","blue"] 
    // }

    // var json = JSON.stringify(person)
    // console.log(json)

    // person.firstName
    // console.log(person.face.eyes)

    // person['firstName']
    // console.log(person['firstName'])
    // console.log(person.height)

    // let firstName = person.firstName
    // let lastName = person['lastName']
    // console.log(firstName)
    // console.log(lastName)

    // destructing objects
    // let {firstName: fName, lastName: lName} = person
    // console.log(fName)
    // console.log(lName)

    // functions in js objects
    // person.fullName()
    // console.log(person.fullName())

    // let json = JSON.stringify(person)
    // console.log(json)

    // console.log(person.favoColors[1])