// methods
// let names = []
// names.push();

// let user = {
//     fullName: function() {
//         return ''
//     }
// }
// user.fullName()


// functions
// till för att underlätta och att slippa repetera sig

// function funcName1() {
//     console.log('function')
// }

// const funcName2 = () => {
//     console.log('arrow-function')
// }

// funcName1()
// funcName2()


// functions with parameters

function funcName1(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`
    console.log(fullName)
}

const funcName2 = (firstName, lastName = 'Larsson') => {
    let _fullName = `${firstName} ${lastName}`
    console.log(_fullName.trim())
}

const funcName3 = name => {
    console.log(name)
}

const funcName4 = name => console.log(name);

const funcName5 = () => console.log('Hejsan');

funcName1('Hans', 'Mattin-Lassei')
funcName2('Hans')
funcName3('Hans')
funcName4('Hans')
funcName5()


// callback functions
const funcName6 = (callback) => {
    let value = 'test'
    callback(value);
}

funcName6(value => {
    console.log(value)
});





