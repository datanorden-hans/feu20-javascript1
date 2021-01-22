const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

let todos = []

const fetchTodos = async () => {
  let url = 'https://jsonplaceholder.typicode.com/todos';

  const res = await fetch(url);
  const _todos = await res.json();

  todos = _todos;
  // console.log(todos);

  listTodos(todos);
}
fetchTodos();

const listTodos = (todos) => {
  output.innerHTML = '';

  todos.forEach(todo => {

    output.innerHTML += newTodo(todo);
  })
}

const newTodo = todo => {

  let template = todo.completed ? `
  <div id="${todo.id}" class="todo completed">
    <h3 class="title">${todo.title}</h3>
    <button class="btn btn-danger">X</button>
  </div>
  `
  : `
  <div id="${todo.id}" class="todo">
    <h3 class="title">${todo.title}</h3>
    <button class="btn btn-danger">X</button>
  </div>
  `
  return template
}

const createTodo = async title => {
  let url = 'https://jsonplaceholder.typicode.com/todos';

  const _todo = {
    title,
    completed: false
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(_todo)
  })

  const todo = await res.json()

  console.log(todo);
  todo.id = Date.now();

  todos.unshift(todo)
  listTodos(todos);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  createTodo(input.value);
  input.value = '';
})

output.addEventListener('click', e => {

  // console.log(e.target.classList.contains('title'))

  if(e.target.classList.contains('btn-danger'))
    deleteTodo(e.target.parentNode.id)

})

const deleteTodo = id => {
  todos = todos.filter(todo => todo.id != id);
  listTodos(todos);
}