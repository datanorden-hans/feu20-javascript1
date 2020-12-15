let value = 2

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
switch(value) {
    case 1:
        document.getElementById('fullname').classList.add('valid')
        break
    case 2:
        document.getElementById('fullname').style.color = 'blue'
        break
    case 3:
        document.getElementById('fullname').style.color = 'gray'
        break
    case 4:
        document.getElementById('fullname').style.color = 'pink'
        break
    default:
        document.getElementById('fullname').classList.add('invalid')
        break
}



/* loopar */
// const array = [1,2,3,4,5]
// for (let i = 0; i < array.length; ++i) { console.log(i) }

const fooditems = ['pannkakor', 'köttbullar', 'julskinka', '']
const ul = document.getElementById('fooditems')

for (let i=0; i < fooditems.length; i++) {
    let li = document.createElement('li')
    li.innerText = fooditems[i]

    ul.appendChild(li)
}

for (let item of fooditems) {
    let li = document.createElement('li')
    li.innerText = item

    ul.appendChild(li)   
}

fooditems.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = `<a href="#">${item}</a>`

    ul.appendChild(li)   
})


let index = 50
let index2 = 50

while (index < 50) {
    console.log('.')
    index++
}

do {
    console.log('.')
    index2++
} while (index2 < 50)


/* funktioner */
