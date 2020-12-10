/* ARRAYS - en lista med ett eller flera värden */

// names = []
// var names = []
// let names = []
// const names = []

// const name = "Hans"
// name = "Tommy"   // detta funkar inte att göra så här

// const names = ["Hans"]
// names[0] = "Tommy"  // detta fungerar

// const person = { firstName: "Hans"}
// person.firstName = "Tommy"  // detta fungerar

// console.log(names)
// console.log(person.firstName)

// const names = ["Hans","Tommy","Anna", "Karin"]
// console.log(names)
// console.log(names.length)
// console.log(names.indexOf("Hans"))

// const multiarray = ["text", 12, true]
// const people = [
//     { firstname: "Hans", age: 12, status: true }, 
//     { firstname: "Tommy", age: 33, status: false }, 
//     { firstname: "Anna", age: 112, status: true }, 
// ]
// const numberarray = [1, 2, 3, 4,5]

// console.log(objarray[1])
// console.log(multiarray[1])
// console.log(numberarray[1])

// people.forEach(function(person, index) {
//     console.log(person.firstname, index)
// })


// let names = ['Hans', 'Tommy', 'Anna']

// .unshift() - lägg till i början av en array
// names.unshift('Zoar')

// .shift() - ta bort första värdet i en array
// names.shift()

// .push() - lägg till i slutet av en array
// names.push('Zoar')

// .pop() - ta bort sista värdet i en array
// names.pop()

// .sort() - sorterar arrayen i A-Z ordning
// names.sort()

// .reverse() - vänder på hela arrayn.
// names.reverse()

// nestlad array - .sort().reverse() etc.
// names.push('Zoar')
// names.sort().reverse()

// delete - tar bort ett värde från en specifik position
// delete names[1]

// .splice() - tar bort/lägg till ett värde från en specifik position
// names.splice(2, 0, "Sarah") // lägger till
// names.splice(1, 1)          // tar bort

// .indexOf() - hitta ett specifikt index att ett värde
// names.indexOf('Anna')
// console.log(names.indexOf('Anna'))

// exempel på att ta bort A
// delete names[names.indexOf('Anna')]

// .length - hur många värden innehåller arrayen
// console.log(names.length)


// .forEach() - loopar igenom hela arrayen
// names.forEach(function(name, index) {   
//     console.log(index, name)
// })

// med arrow-functions (lambda functions/lambda expression)
// names.forEach((name, index) => {
//     console.log(index, name)
// })

// names.forEach(name => {
//     console.log(name)
// })

// names.forEach(name => console.log(name))


// for loop - det gamla sättet att loopa igenom en array
// for (var i=0; i < names.length; i++) {
//     console.log(names[i]);
// }


// .map
// let people = [
//     { firstName: "Hans", lastName: "Mattin-Lassei"},
//     { firstName: "Anna", lastName: "Nyman"},
//     { firstName: "Tommy", lastName: "Mattin-Lassei"},
//     { firstName: "Anders", lastName: "Andersson"},
// ]

// let firstnames = people.map(person => {
//     return person.firstName
// })
// console.log(firstnames)

// .filter
// let specificpeople = people.filter(person => {
//     return person.lastName == "Mattin-Lassei"
// })
// console.log(specificpeople)
