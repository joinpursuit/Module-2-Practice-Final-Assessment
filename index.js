    const allChar = document.getElementById('all-characters')

    async function char() {
        const result =  await axios.get("https://rickandmortyapi.com/api/character")
        console.log(result.data.results)
        result.data.results.forEach(el => {
            const li2 = document.createElement('li')
            li2.classList.add('photo')
            const img = document.createElement('img')
            img.classList.add('photo-img')
            img.src = el.image
            const ptwo = document.createElement('p') 
            ptwo.textContent = el.name
            li2.appendChild(img)
            li2.appendChild(ptwo)
            allChar.appendChild(li2) 
        });

    }
    char()

    function caracter(all){
        
    }

    allChar.addEventListener('click', e =>{
        e.preventDefault()
        fetch(`https://rickandmortyapi.com/api/character/${e.target.value}`)
        .then((res)=>{
            return res.json()
        }).then((res)=>{
            let todo = res.data
            console.log(todo.name)
            const main = document.querySelector("main");
            main.style.display = "flex";
            const title = document.querySelector("title");
            title.textContent = res.name;
            const name = document.querySelector('h3')
            name.textContent = res.data.name
            const status = document.getElementById('first')
            status.innerHTML = `Status: ${res.status}`
            const location = document.getElementById('second')
            location.innerHTML = `Location: ${res.location.name}`
            const img = document.getElementById('photo')
            img.src = res.image
        })
        
    })
    const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comments = document.querySelector("#character-comments-ul");
  const input = document.querySelector("input[type=text]");
  const title = document.querySelector("title");
  const li = document.createElement("li");
  li.innerHTML = `<b>${title.textContent}:</b> ${input.value}`;
  comments.appendChild(li);
  input.value = "";
});





