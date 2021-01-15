const form = document.querySelector('#regForm');

// Validerar vajer input för sig

const validateFirstName = () => {
  const firstName = document.querySelector('#firstName');
  const firstNameError = document.querySelector('#firstName-error');

  if(firstName.value === '') {
    firstNameError.innerText = 'Du måste ange ett förnamn';
  }
  else if(firstName.value.length < 2) {
    firstNameError.innerText = 'Du måste ange minst 2 tecken';
  }
  else {
    firstNameError.innerText = ''
  }
}


// Validera alla inputs med samma funktion

const validate = (id) => {
  const input = document.querySelector(id);
  const error = document.querySelector(id + '-error');

  if(input.value === '') {
    error.innerText = 'Du måste ange ett namn';
  }
  else if(input.value.length < 2) {
    error.innerText = 'Du måste ange minst 2 tecken'
  }
  else {
    error.innerText = '';
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();


  // validateFirstName();
  validate('#firstName');
  validate('#lastName');
})