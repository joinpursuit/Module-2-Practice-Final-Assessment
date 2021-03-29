// const body = document.querySelector("body");
// const form = document.querySelector("form");
// const allCharacters = document.querySelector("#all-characters");
// const allCharacters = document.querySelector("#all-characters");
// const li = document.createElement("li");
// ul.appendChild("li");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
// const characters = async () => {
//   try {
//     const res = await axios.get(`https://rickandmortyapi.com/api/character`);
//     res.data.results.forEach((char) => {
//       const li = document.createElement("li");
//       li.innerHTML = "";
//       allCharacters.appendChild(li);
//       const img = document.createElement("img");
//       img.src = char.image;
//       li.appendChild(img);
//     });
//   } catch (err) {}
// };

// allCharacters.addEventListener("click", (e) => {
//     e.preventDefault();
//     characters();
// });

// document.addEventListener(“DOMContentLoaded”, (event) =>{
//     event.preventDefault();
//     const allCharacters = document.querySelector(“#all-characters”);
//     const characters = async () => {

//     })
const allCharacters = document.querySelector("#all-characters");
const main = document.querySelector("main");
const name = document.querySelector("#character-name");
const image = document.querySelector("#character-img");
const charStatus = document.querySelector("#character-status");
const charLocation = document.querySelector("#character-location");
const title = document.querySelector("title");
const form = document.querySelector("form");
const comments = document.querySelector("#character-comments-ul");

const getAllCharacters = async () => {
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character`);
    debugger;
    res.data.results.forEach((char) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      img.src = char.image;
      img.value = char.id;
      p.textContent = char.name;
      allCharacters.appendChild(li);
      //   li.innerHTML = "";
      li.appendChild(img);
      li.appendChild(p);
    });
  } catch (err) {
    console.log(err);
  }
};
getAllCharacters();

allCharacters.addEventListener("click", async (e) => {
  main.style.display = "flex";
  const url = `https://rickandmortyapi.com/api/character/${e.target.value}`;
  const res = await axios.get(url);
  name.innerText = res.data.name;
  image.src = res.data.image;
  charStatus.innerHTML = `<b>status:</b> ${res.data.status}`;
  charLocation.innerHTML = `<b>Location:</b> ${res.data.location.name}`;
  title.innerText = res.data.name;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment");
  const li = document.createElement("li");
  li.innerHTML = `<b>${title.textContent}:</b>  ${comment.value}`;
  comments.appendChild(li);
  comments.value = "";
});
