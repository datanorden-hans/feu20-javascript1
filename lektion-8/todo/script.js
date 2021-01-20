const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => {
    todos = data;
    console.log(todos);
    listTodos();
  })
}
fetchTodos();

const newTodo = (todo) => {

  let card = document.createElement('div');
  card.classList.add('card', 'p-3', 'my-3', 'todo');

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

  let title = document.createElement('h3');
  title.classList.add('title');
  title.innerText = todo.title;

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerText = 'X';
  button.addEventListener('click', () => console.log(todo.id));

  innerCard.appendChild(title);
  innerCard.appendChild(button);
  card.appendChild(innerCard);
  output.appendChild(card);
}


const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    // let _todo = `
    // <div class="card p-3 my-3 todo">
    //   <div class="d-flex justify-content-between">
    //     <h3 class="title">${todo.title}</h3>
    //     <button class="btn btn-danger">X</button>
    //   </div>
    // </div>
    // `
    // output.insertAdjacentHTML('beforeend', _todo);

    newTodo(todo);
  })
}


const createTodo = (title) => {

  fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    todos.unshift(data);
    listTodos();
  })

}

form.addEventListener('submit', e => {
  e.preventDefault();

  createTodo(input.value);
  input.value = '';
})