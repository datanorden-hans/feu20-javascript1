
class User {
  constructor(firstName = 'förnamn', lastName = 'efternamn') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loggedIn = false;
  }

  fullName() {
    console.log(`${ this.firstName } ${ this.lastName }`)
  }

  static countUsers() {
    let counter = 0

    users.forEach(user => counter ++)

    if(counter > 0) {
      return 'there are ' + counter + ' users'
    } else {
      return 'there are no users'
    }
  }

  static clearUsers() {
    users = []
  }

}


let userOne = new User('Hans', 'Mattin-Lassei')

// console.log(userOne)

// userOne.fullName()


class Admin extends User {

  removeUser(user) {
    users = users.filter(u => u.firstName != user.firstName)
  }

  fullName() {
    super.fullName()
    console.log('Här kan jag lägga till extra funktionalitet')
  }

}


const joakim = new Admin('Joakim', 'Wahlström')

let userTwo = new User()

let users = [userOne, joakim, userTwo]

User.clearUsers()

// console.log(User.countUsers())

// joakim.removeUser(userTwo)

// console.log(users)

// userOne.fullName()
// joakim.fullName()

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  gearbox = 0

  gearUp() {
    this.gearbox ++
    console.log('shifted gear to ' + this.gearbox + ' gear')
    return this
  }
  gearDown() {
    this.gearbox --
    console.log('shifted gear to ' + this.gearbox + ' gear')
    return this
  }

}


let fiat = new Car('punto', 'pink')

fiat.gearUp().gearUp().gearUp().gearDown().gearUp()