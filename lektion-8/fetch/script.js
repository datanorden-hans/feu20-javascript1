/* 
    HTTP:

    GET     -   När vi vill hämta saker
    POST    -   När vi vill skapa saker
    PUT     -   När vi vill uppdatera ett helt objekt
    PATCH   -   När vi vill uppdatera hela / delar av ett objekt
    DELETE  -   När vi vill ta bort ett objekt

*/


const btn = document.querySelector('#btn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');


let posts = [];


const getJsonAsync = async () => {
  try {
    const res = await fetch('json.json');
    const data = await res.json();
  
    posts = data;
    jsonOutput.innerHTML = '';
      posts.forEach(post => {
        jsonOutput.innerHTML +=
        `
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
        `
      })
  }
  catch(err) {
    console.log(err)
  }
}



const getJson = () => {
  fetch('json.json')
  .then(res => res.json())
  .then(data => {
    posts = data;
    // console.log(posts);

    jsonOutput.innerHTML = '';
    posts.forEach(post => {
      jsonOutput.innerHTML +=
      `
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${post.title}</h3>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
      `
    })
  })
  .catch(error => {
    console.log('fel! ' + error);
  })
}


btn.addEventListener('click', function() {

  fetch('text.txt')
  .then(res => {
    // console.log(res);
    return res.text()
  })
  .then(data => {
    // console.log(data);
    textOutput.innerText = data;
  })
  .catch(error => {
    console.log('fel! ' + error);
  })
  

})

jsonBtn.addEventListener('click', getJsonAsync)



const promise = function() {
  return new Promise((resolve, reject) => {

    console.log('hämtar data');
    setTimeout(() => {

      if(false) {
        resolve(
          {
            status: 200,
            obj() {
              return {
                title: 'blog post 1',
                body: 'Det här är en blog post'
              }
            }
          }
        )
      } else {
        reject(new Error('could not get data'))
      }
    }, 2000)

  })
}

promise()
.then(res => res.obj())
.then(post => console.log(post))
.catch(err => console.log('feeeel' + err))