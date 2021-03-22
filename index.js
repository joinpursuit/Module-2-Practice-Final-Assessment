document.addEventListener("DOMContentLoaded", () => {
  const characters = document.querySelector("#all-characters");
  const main = document.querySelector("main");
  const name = document.querySelector("#character-name");
  const image = document.querySelector("#character-image");
  const status = document.querySelector("#character-status");
  const location = document.querySelector("#character-location");
  const title = document.querySelector("title");
  const submit = document.querySelector("input[type=submit]");
  const comment = document.querySelector("input[type=text]");
  const commentsList = document.querySelector('#character-comments-ul')

  const getCharacters = async () => {
    main.classList.remove("hide");
    try {
      let response = await axios.get(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
      );
      //   console.log(response);
      let allCharacters = response.data;
      //   console.log(allCharacters[0].name);

      allCharacters.forEach((element) => {
        const li = document.createElement("li");
        const charImage = document.createElement("img");
        charImage.src = element.image;
        charImage.id = "photo-img";
        charImage.value = element.id;
        const charName = document.createElement("p");
        charName.textContent = element.name;
        charName.value = element.id;
        li.value = element.id;
        li.appendChild(charImage);
        li.appendChild(charName);
        characters.appendChild(li);
      });
    } catch (err) {
      console.log(`Error message: ${err}`);
    }
  };

  getCharacters();

  characters.addEventListener("click", (e) => {
    main.style.display = "flex";
    fetch(`https://rickandmortyapi.com/api/character/${e.target.value}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("error message: ", Error);
        }
        return response.json();
      })
      .then((character) => {
        console.log(character);
        name.textContent = character.name;
        title.textContent = character.name;
        image.src = character.image;
        status.textContent = character.status;
        location.textContent = character.location.name;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();
  
let li = document.createElement('li')
li.innerHTML = `<b>${title.textContent}: </b>${comment.value}`
commentsList.appendChild(li)
comment.value = ""
  });
});
