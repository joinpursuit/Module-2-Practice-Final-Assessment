const allCharacters = document.querySelector('#all-characters')
const comments = document.querySelector("#character-comments-ul");
const form = document.querySelector("form")
document.addEventListener('DOMContentLoaded', () => {
 
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("input[type=text]")
      const title = document.querySelector("title").textContent
      const li = document.createElement("li");
      li.innerHTML = `<b>${title}:</b> ${input.value}`;
      comments.appendChild(li);
      form.reset()

    });

  async function allChar() {
    const results = await axios.get("https://rickandmortyapi.com/api/character")
    console.log(results.data)
    const infoResult = results.data.results
    for(let character of infoResult) {
      const item = makeCharItem(character)
      allCharacters.appendChild(item)
      console.log(item)
    }
    function makeCharItem (character) {
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.src = character.image
      img.classList.add('photo-img')
      li.appendChild(img)
      const text = document.createElement('p')
      text.textContent = character.name
      li.appendChild(text)
      li.addEventListener('click', () => {
        const main = document.querySelector('main');
        main.style.display = "flex";
        const name = document.querySelector('h3')
        const img = document.getElementById('img')
        const status = document.getElementById('first')
        const location = document.getElementById('second')
        const title = document.querySelector('title')
        title.textContent = character.name
        name.textContent = character.name
        img.src = character.image
        status.innerHTML = `<b>Status</b>: ${character.status}`
        location.innerHTML = `<b>Location</b>: ${character.location.name}`


        
      })

      return li
    }
    
}
allChar();
})



