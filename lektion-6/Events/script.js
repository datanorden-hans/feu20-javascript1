const btn = document.querySelector('#btnAlert');

const form = document.querySelector('#loginForm');

// btn.addEventListener('click', function() {
//   alert('Warning!')
//   console.log('warning warning')
// })

// btn.addEventListener('dblclick', () => {
//   console.log('warning warning')
// })

// btn.addEventListener('mousedown', () => {
//   console.log('mouse down')
// })
// btn.addEventListener('mouseup', () => {
//   console.log('mouse up')
// })

// btn.addEventListener('mouseenter', () => {
//   console.log('mouse enter')
// })
// btn.addEventListener('mouseleave', () => {
//   console.log('mouse leave')
// })

form['firstName'].addEventListener('keyup', (e) => {
  console.log(e.key)
})
form['firstName'].addEventListener('keydown', (e) => {
  console.log(e.key)
})
form['firstName'].addEventListener('focus', function(e) {
  console.log('fokus');
  this.classList.add('focus');
})
form['firstName'].addEventListener('blur', function(e) {
  console.log('blur');
  this.classList.remove('focus');
})


form.addEventListener('submit', e => {
  e.preventDefault()

  console.log('validerar formulär');
  console.log('validering klar! skickar till databasen')
})