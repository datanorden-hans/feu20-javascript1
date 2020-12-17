export default class UserService {
    constructor() {}

    static signUp(userObj) {
        console.log('registrating the user')
        console.log(userObj)
    }

    static signIn(email, password) {
        console.log('logging in the user')
        console.log(email, password)
    }
}