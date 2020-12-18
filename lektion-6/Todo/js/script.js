let todos = [
  {
    id: '1',
    title: 'Todo One',
    completed: false
  },
  {
    id: '2',
    title: 'Todo Two',
    completed: false
  },
  {
    id: '3',
    title: 'Todo Three',
    completed: false
  },
  {
    id: '4',
    title: 'Todo Four',
    completed: false
  },
]

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addTodo');
const output = document.querySelector('#todos');

const listTodos = () => {
  output.innerHTML = ''

  todos.forEach(todo => {
    output.innerHTML += `<div id="${todo.id}" class="bg-white border rounded p-2 d-flex justify-content-between align-items-center mt-1">${todo.title}<button class="btn btn-danger px-3">X</button></div>` 
  })
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault()

  if(input.value !== '') {
    input.classList.remove('is-invalid');

    let todo = {
      id: Date.now().toString(),
      title: input.value,
      completed: false
    }

    todos.push(todo);

    listTodos();

    input.value = '';

  } else {
    input.classList.add('is-invalid');
  }

})

output.addEventListener('click', (e) => {
  todos = todos.filter(todo => todo.id !== e.target.parentNode.id)
  listTodos();
})

listTodos();