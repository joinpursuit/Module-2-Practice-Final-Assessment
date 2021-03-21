const allCharacters = document.querySelector("#all-characters");
const main = document.querySelector("main");
const name = document.querySelector("#character-name");
const image = document.querySelector("#character-image");
const status = document.querySelector("#character-status");
const place = document.querySelector("#character-location");
const title = document.querySelector("title")

const getAllCharacters = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    // console.log(res);
    res.data.results.forEach((character) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      // console.log(character);

      img.src = character.image;
      img.value = character.id;
      p.innerText = character.name;
      li.appendChild(img);
      li.appendChild(p);
      allCharacters.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
};

getAllCharacters();

allCharacters.addEventListener("click", async (e) => {
  main.style.display = "flex";
  debugger;
  // console.log(e.target);
  // debugger
  const url = `https://rickandmortyapi.com/api/character/${e.target.value}`;
  const res = await axios.get(url);
  name.innerText = res.data.name;
  image.src = res.data.image;
  status.innerHTML = `<b>Status</b>${res.data.status}`;
  place.innerHTML = `<b>Location</b>${res.data.location.name}`;
  title.innerText = res.data.name;
});
