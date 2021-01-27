const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

const users = []

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  id = Date.now().toString();
}

const createUser = (firstName, lastName, email) => {

  const user = new User(firstName, lastName, email);

  users.push(user); //pushar till min array
  output.insertAdjacentHTML('beforeend', newUser(user)); // lägger till i min UI
  // renderUsers();
  const u = document.querySelectorAll('#output .user');
  u.forEach(user => {
    user.addEventListener('click', function() {
      this.classList.add('slideout');
      setTimeout(() => {
        this.remove()
      },500)
      console.log(users);
    })
  })
}

const newUser = user => {
  const template = `
  <div class="user animate">
    <h3>${user.firstName} ${user.lastName}</h3>
    <p>${user.email}</p>
  </div>
  `
  return template
}

// const renderUsers = () => {
//   output.innerHTML = '';
//   users.forEach(user => {
//     output.innerHTML += newUser(user);
//   })
// }

form.addEventListener('submit', e => {
  e.preventDefault();

  if(firstName.value !== '' && lastName.value !== '' && email.value !== '') {
    createUser(firstName.value, lastName.value, email.value)
    form.reset();
    firstName.focus();
  }

})