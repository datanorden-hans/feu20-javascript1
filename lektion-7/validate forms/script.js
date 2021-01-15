const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input');

const validate = id => {
  let input = document.querySelector(id);

  if(input.value === '' || input.value.length < 2) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');

    input.focus();
    return false;

  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (email) => {
  if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    return true

  } else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
    return false

  }
}



inputs.forEach(input => {
  input.addEventListener('keyup', function() {
    // console.log(input.type);
    if(input.type === "text") {
      validate('#'+input.id);
    } else if(input.type === "email") {
      validateEmail(email)
    }
  })
})

// email.addEventListener('keyup', function() {
//   validateEmail(email)
// })


regForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // console.log(e.currentTarget[1]);
  // console.log(e.target[1]);

  // validate('#firstName');
  // validate('#lastName');
  // validateEmail(email);

  for(let i = 0; i < e.currentTarget.length; i++) {
    if(e.currentTarget[i].type === "text") {
      validate('#'+ e.currentTarget[i].id)
    } else if(e.currentTarget[i].type === "email") {
      validateEmail(email);
    }
  }

  if(validate('#firstName') && validate('#lastName') && validateEmail(email)) {
    console.log('Success')
    // skicka data till databasen eller skapa en ny användare osv.
    regForm.reset();
  } else {
    console.log('nope')
  }

})