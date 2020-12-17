/* använda det på ett vanligt sätt som kräver en instans av objektet */
// class UserService {
//     constructor(uri) {
//         this.baseUri = uri
//     }

//     signUp(user) {
//         console.log(`Registering the user.`)
//         console.log(user)
//     }

//     signIn(email, password) {
//         console.log(`Signing in the user with ${email} and ${password}.`)
//     }

// }

// const userService = new UserService()
// userService.signUp({ firstName: 'Hans', lastName: 'Mattin-Lassei'})
// userService.signIn('hans@domain.com', 'BytMig123')



function userSignUp(user) {
    console.log(`Registering the user.`)
    console.log(user)
}

function userSignIn(email, password) {
    console.log(`Signing in the user with ${email} and ${password}.`)
}

function adminSignUp(user) {
    console.log(`Registering a new admin user.`)
    console.log(user)
}

function adminSignIn(email, password) {
    console.log(`Signing in the user with ${email} and ${password}.`)
}




/* statisk och kräver inte att du gör en instans av objektet */
class UserService {
    constructor(uri) {
        this.baseUri = uri
    }

    static signUp(user) {
        console.log(`Registering the user.`)
        console.log(user)
    }

    static signIn(email, password) {
        console.log(`Signing in the user with ${email} and ${password}.`)
    }

}
UserService.signUp({ firstName: 'Hans', lastName: 'Mattin-Lassei'})
UserService.signIn('hans@domain.com', 'BytMig123')


class AdminService {
    constructor(uri) {
        this.baseUri = uri
    }

    static signUp(user) {
        console.log(`Registering a new admin user.`)
        console.log(user)
    }

    static signIn(email, password) {
        console.log(`Signing in the user with ${email} and ${password}.`)
    }

}
AdminService.signUp({ firstName: 'Hans', lastName: 'Mattin-Lassei'})
AdminService.signIn('hans@domain.com', 'BytMig123')



