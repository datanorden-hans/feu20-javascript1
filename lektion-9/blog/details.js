const output = document.querySelector('#output');
// console.log(window.location);
const id = new URLSearchParams(window.location.search).get('id');
// console.log(id);
let loading = false;

const getPost = async () => {
  loading = true;
  
  const url = 'https://jsonplaceholder.typicode.com/posts/' + id;

  const res = await fetch(url);
  const post = await res.json();

  loading = false;

  output.innerHTML = `
  <div class="card p-4 mt-5">
  <div class="text-center mb-4">
    <h2>${post.title}</h2>
  </div>
  <p>${post.body}</p>
</div>
  `
}

window.addEventListener('DOMContentLoaded', () => getPost());
