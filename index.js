console.log("hello");
const ul = document.querySelector("#all-characters");
const main = document.querySelector("main");
const char = document.querySelector("#character-name");
const species = document.querySelector("#character-status");
const img = document.querySelector("#character-img");
const place = document.querySelector("#character-location");
const title = document.querySelector("title");

const form  = document.querySelector("form")
const comments = document.querySelector("#character-comments-ul")

const characters = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    res.data.results.forEach((charURL) => {
      const listOfCharacters = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      // debugger
      img.classList.add("char");
      img.src = charURL.image;
      img.value = charURL.id;
      p.innerText = charURL.name;
      listOfCharacters.classList.add("photo-img");
      listOfCharacters.appendChild(img);
      listOfCharacters.appendChild(p);
      // debugger
      ul.appendChild(listOfCharacters);
    });
  } catch (err) {
    console.log(err);
  }
};
characters();
ul.addEventListener("click", async (e) => {
  main.style.display = "flex";
  const url = `https://rickandmortyapi.com/api/character/${e.target.value}`;
  const res = await axios.get(url);
  char.innerText = res.data.name;
  img.src = res.data.image;
  species.innerHTML = `<b>Status:</b> ${res.data.status}`;
  place.innerHTML = `<b>Location:<b> ${res.data.location.name}`;
  title.innerHTML = res.data.name;
});

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const comment= document.querySelector("#input");
    const li = document.createElement("li")
    li.innerHTML = `<b>${title.textContent}:</b> ${comment.value} `
    comments.appendChild(li);
    comment.value = ""
})