// let value = 2

/* if-satser */
// == === != !== < <= > >=
// ! && ||

// if ((1 === '1') && (2 === 2)) {
//     document.getElementById('fullname').classList.add('valid')

// } else if((1 == '1') && (2 !== 1)) {
//     document.getElementById('fullname').style.color = 'blue'

// } else {
//     document.getElementById('fullname').classList.add('invalid')

// }

// if(value === 1) {
//     document.getElementById('fullname').classList.add('valid')
// } else if (value === 2) {
//     document.getElementById('fullname').style.color = 'blue'
// } else if (value === 3) {
//     document.getElementById('fullname').style.color = 'gray'
// } else if (value === 4) {
//     document.getElementById('fullname').style.color = 'pink'
// } else {
//     document.getElementById('fullname').classList.add('invalid')
// }


/* switch  är som en === */
// switch(value) {
//     case 1:
//         document.getElementById('fullname').classList.add('valid')
//         break
//     case 2:
//         document.getElementById('fullname').style.color = 'blue'
//         break
//     case 3:
//         document.getElementById('fullname').style.color = 'gray'
//         break
//     case 4:
//         document.getElementById('fullname').style.color = 'pink'
//         break
//     default:
//         document.getElementById('fullname').classList.add('invalid')
//         break
// }



/* loopar */
// const array = [1,2,3,4,5]
// for (let i = 0; i < array.length; ++i) { console.log(i) }

// const fooditems = ['pannkakor', 'köttbullar', 'julskinka', '']
// const ul = document.getElementById('fooditems')

// for (let i=0; i < fooditems.length; i++) {
//     let li = document.createElement('li')
//     li.innerText = fooditems[i]

//     ul.appendChild(li)
// }

// for (let item of fooditems) {
//     let li = document.createElement('li')
//     li.innerText = item

//     ul.appendChild(li)   
// }

// fooditems.forEach(item => {
//     let li = document.createElement('li')
//     li.innerHTML = `<a href="#">${item}</a>`

//     ul.appendChild(li)   
// })


// let index = 50
// let index2 = 50

// while (index < 50) {
//     console.log('.')
//     index++
// }

// do {
//     console.log('.')
//     index2++
// } while (index2 < 50)


/* funktioner */
// let outside = 1

// console.log('before: '+ outside)

// function displayFoodItems() {
//     inside = 2
//     console.log('inside: ' + inside)  
// }

// const displayFoodItems = () => {
//     let inside = 2
//     outside = 3
//     console.log('inside: ' + inside)  
// }

// displayFoodItems()
// console.log('after: '+ outside)

// let outside = 1
// let extra = 5

// const displayFoodItems = () => {
//     outside += 10
//     console.log('inside: ' + outside)  
// }

// const displayFoodItemsWithParameters = (value) => {
//     let extra = 20
//     value = 10 + extra
//     console.log('inside with: ' + value)  
// }

// // output
// console.log('before: ' + outside)
// displayFoodItems()
// displayFoodItemsWithParameters(outside)
// console.log('after: ' + outside)


/* metoder */

let lastName = 'Andersson'

let person1 = {
    firstName: 'Hans',
    lastName: 'Mattin-Lassei',

    fullName: function() {
        return `${person1.firstName} ${this.lastName}`
    }
}

let person2 = {
    firstName: 'Anki',
    lastName: 'Ekberg',

    fullName: function() {
        return `${person1.firstName} ${lastName}`
    }
}



console.log(person1.fullName())
console.log(person2.fullName())


// bad practise
function BAD_calculateTemperature(temp) {
    // calculate celsius

    // calculate farenheit

    // calcualte kelvin
}

// good practise
function calculateCelsius(temp) {}
function calculateFarenheit(temp) {}
function calculateKelvin(temp) {}


// bad practise
function register() {
    // validate inputs
    // register user
    // login user
}

// good practise
function validateInputs() {

}

function registerUser() {
    if(!checkUserEmailExists(email)) {
        // create user
        return true
    } else {
        return false
    }
}

function loginUser() {
    if(checkUserEmailExists(email)) {
        // login user
        return true
    } else {
        return false
    }
}

function checkUserEmailExists(email) {}

function onSignUpSignIn() {
    if(validateInputs()){
        if(registerUser()) {
            if(loginUser()) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }   
}

function onSignUp() {    
    if(validateInputs()) 
        registerUser()
}