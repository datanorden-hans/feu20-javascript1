/* JS Object */
    // var user = {}

    // var user = {
    //     "firstName": "Hans",
    //     "lastName": "Mattin-Lassei",
    //     "email": "hans@domain.com",
    //     "password": "BytMig123"
    // }

    // var user = {
    //     firstName: 'Hans',
    //     lastName: 'Mattin-Lassei',
    //     account: {
    //         email: 'hans@domain.com',
    //         password: 'BytMig123'
    //     },
    //     fullName: function() {
    //         return `${this.firstName} ${this.lastName}`
    //     }
    // }

    // JSON
    // var json = '{"firstName": "Hans","lastName": "Mattin-Lassei"}'

    // var json = JSON.stringify(user)
    // console.log(json)

    // const converted = JSON.parse(json)
    // console.log(converted)

    // läsa ut data från ett objekt
    // console.log(converted.firstName)
    // console.log(converted['firstName'])
    // console.log(converted.account.email)
    // console.log(converted['account']['email'])

    // console.log(user.fullName())
    // console.log(user['fullName']())

    // Destructure
    // let {firstName, lastName} = converted
    // console.log(firstName)
    // console.log(lastName)

    // Ändra ett värde
    // converted.firstName = 'Johan'
    // console.log(converted.firstName)

    // Lägg till ett värde
    // converted.age = 36
    // console.log(converted.age)
    // console.log(converted)

    // Ta bort ett värde
    // delete converted.age
    // console.log(converted)


/* Array */
var array = []
var array = ['Hans Mattin-Lassei', 'Tommy Mattin-Lassei']
var array = [36, 38]
var array = ['Hans Mattin-Lassei', 36, 'Tommy Mattin-Lassei', 38]
var array = [
    { name: 'Hans Mattin-Lassei', age: 36},
    { name: 'Tommy Mattin-Lassei', age: 38}
]
// console.log(array)

// Lägg till något i arrayen (push = lägg till i slutet, unshift = lägg till i början )
array.push({ name: 'Joakim Wahlström', age: 33})
// console.log(array)

array.unshift({ name: 'Haithem Smirani', age: 35})
// console.log(array)

array.splice(2, 0, { name: 'Anki Mattin-Lassei', age: 42})
// console.log(array)


// Ta bort något i arrayen (pop = ta bort från slutet, shift = ta bort från början )
// array.pop()
// console.log(array)

// array.shift()
// console.log(array)

// delete array[1]
// console.log(array)

// array.splice(1,1)
// console.log(array)

// var array = ['Haithem','Anki','Hans','Tommy','Joakim']

// Sortera i bokstavs/siffer-ordning (A-Z, 0-9)
// array.sort()
// console.log(array)

// Ändra ordningen i arrayen så att det sista värdet hamnar längst fram
// array.reverse()
// console.log(array)

// Nestlade methoder
// array.sort().reverse()
// console.log(array)

// hämta en specifik plats/index för ett visst värde 
// let index = array.indexOf('Hans')

// delete array[index]
// array.splice(index, 1)
// console.log(array)
