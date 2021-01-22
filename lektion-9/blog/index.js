const output = document.querySelector('#output');

const listPosts = async () => {

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const res = await fetch(url);
  const posts = await res.json();

  output.innerHTML = '';
  posts.forEach(post => {

    let html = `
    <a href="details.html?id=${post.id}" class="post">
      <div class="card my-3 p-4">
        <h3 class="mb-3">${post.title}</h3>
        <p>${post.body}</p>
      </div>
    </a>
    `
    output.innerHTML += html;

  })

}

window.addEventListener('DOMContentLoaded', () => listPosts());
