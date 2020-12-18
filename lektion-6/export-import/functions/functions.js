export const validate = user => {
  if(user.firstName != '') {
    console.log('users firstName looks good')
    return true
  } else {
    console.log('all Users must have a firstName')
    return false
  }
}

export const hasNumber = string => {
  return /\d/.test(string);
}