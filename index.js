const ul = document.querySelector("#all-characters");
const main = document.querySelector("main");
let characterName = document.querySelector("#character-name");
const image = document.querySelector("#character-img");
const species = document.querySelector("#character-species");
const place = document.querySelector("#character-location");
const form = document.querySelector("form");
const title = document.querySelector("title");
const loadPage = async () => {
  try {
    const characters = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    characters.data.results.forEach((character) => {
      const characterElement = document.createElement("div");
      const img = document.createElement("img");
      const h5 = document.createElement("h5");
      h5.innerText = character.name;
      img.src = character.image;
      img.value = character.id;
      h5.value = character.id;
      characterElement.appendChild(img);
      characterElement.appendChild(h5);
      ul.appendChild(characterElement);
    });
  } catch (error) {
    console.log(error);
  }
};
loadPage();

ul.addEventListener("click", async (e) => {

  const currentCharacter = await axios.get(
    `https://rickandmortyapi.com/api/character/${e.target.value}`
  );
  characterName.innerText = currentCharacter.data.name;
  characterName.value = currentCharacter.id;
  image.src = currentCharacter.data.image;
  title.innerText = currentCharacter.data.name
  species.innerHTML = `Status: ${currentCharacter.data.status}`;
  place.innerHTML = `Location: ${currentCharacter.data.location.name}`;
  title.innerText = currentCharacter.data.name;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comments = document.querySelector("#character-comments-ul");
  const li = document.createElement("li");
  const input = document.querySelector("input[type=text]");
  li.innerText = `${title.textContent} ${comments}`;
  li.innerHTML = `<b>${title.textContent}:</b> ${input.value}`;
  comments.appendChild(li);
  input.value = "";
});
