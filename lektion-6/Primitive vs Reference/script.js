let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


const userOne = { name: 'Joakim', age: 33 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'Hans';
userOne.age = 50;

console.log(userOne, userTwo);


let users = [
  userOne,
  { name: 'Jeanette', age: 33 }
]


userOne.name = 'Joakim'

console.log(users)