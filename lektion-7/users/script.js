const form = document.querySelector('#form');
const output = document.querySelector('#output');

const validateText = (input, error) => {
  if(input.value === '') {
    error.innerText = 'Du måste ange ett namn';
    return false;
  } else if(input.value.length < 2) {
    error.innerText = 'Namnet måste vara minst 2 tecken'
    return false;
  }
  else {
    error.innerText = '';
    return true;
  }
}

const validateEmail = (input, error) => {
  let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  if(regEx.test(input.value)) {
    error.innerText = '';
    return true;
  } else {
    error.innerText = 'Du måste ange en giltig email address'
    return false
  }
}

const validate = id => {
  const input = document.querySelector('#'+id);
  const error = document.querySelector('#'+id+'-error');

  if(input.type === "text") {
    validateText(input, error)
  }

  if(input.type === "email") {
    validateEmail(input, error)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  document.querySelectorAll('input').forEach(input => {
    validate(input.id);
    // console.log(input.id);
  })


})
