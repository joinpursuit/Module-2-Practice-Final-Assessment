// click on a character.
// When they select a character, the `main` should appear and information about that
// character (name, image, status, location name) should populate in the `character-info` section.
// When they click on a different character, this information should be replaced.
// The page `title` should also match the name of the character selected.
// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of
// `character-comments-ul`, with the selected character's name (in bold) and a comment (not bold).


// https://rickandmortyapi.com/documentation

const ul = document.querySelector("ul");
const name = document.querySelector("#name");
const picture = document.querySelector("#picture");
const charStatus = document.querySelector("#status");
const charLocation = document.querySelector("#location");
const main = document.querySelector("main");

const displayAllCharacters = (res) => {
  res.results.forEach((char) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.textContent = char["name"]; // display name
    img.src = char["image"]; // display image
    li.classList.add("photo-img"); // add class name
    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
  });
};

const eachCharacter = (res, event) => {
  // debugger;
  main.style.display = "flex"
  const selection = event.target.parentElement.innerText;
  res.results.forEach((char) => {
    if (selection === char.name) {
      name.textContent = char.name;
      picture.src = char.image;
      charStatus.textContent = char.status;
      charLocation.textContent = char.location.name;
    }
  });
};

const getCharacters = (event) => {
  fetch("https://rickandmortyapi.com/api/character?page=1")
    .then((res) => {
      if (!res.ok) {
        throw Error(`Girrrl ya wrong! ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      displayAllCharacters(res);


      // look about creating this event listener outside
      ul.addEventListener("click", (event) => {
        eachCharacter(res, event);
      });

    })
    .catch((err) => {
      console.log(err);
    });
};

getCharacters();

// Vanessa ///////////

// const chosenCharacter = e.target.parentElement.innerText;
// res.data.results.forEach((el) => {
//   if (el.name === chosenCharacter) {
//     debugger;
//     characterHeader.textContent = el.name;
//     characterImage.src = el.image;
//     characterStatus.textContent = el.status;
//     characterLocation.textContent = el.location.name;
//   }
// });
