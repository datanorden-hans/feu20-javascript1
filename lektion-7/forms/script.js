// const firstName = document.querySelector('#firstName');
const regForm = document.querySelector('#regForm');

// console.log(firstName);
// console.log(regForm[0]);

regForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if(!(e.currentTarget['toc'].checked)) {
    
    return false
  }

  const query = 'address';

  let firstName = e.currentTarget[0].value;
  let lastName = e.currentTarget.lastName.value;
  let address = e.currentTarget[query].value;
  // console.log(address);

  let user = {
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    address: e.currentTarget.address.value,
    role: e.currentTarget.role.value
  }

  console.log(user)

})