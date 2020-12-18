import UserService from './services/UserService.js'
import { validate, hasNumber } from './functions/functions.js'


const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  password: 'BytMig123'
}

if(validate(user))
  UserService.signUp(user)


class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  get id() {
    return Math.floor(Math.random() * 10000000000).toString()
  }

  get name() {
    return this.lastName.toUpperCase()
  }
  set name(newName) {
    if(!hasNumber(newName)) {
      this.lastName = newName;
    } else {
      console.log('Error name contains numbers')
    }
  }

}

const hans = new Person('Hans')
hans.lastName = 'Mattin-Lassei'
// hans.id = 'hej'
console.log(hans)