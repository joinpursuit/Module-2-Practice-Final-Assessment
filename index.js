const allChars = document.querySelector("#all-characters");

const getCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      if (!res.ok) throw Error("Err:" + res.status);
      return res.json();
    })
    .then((res) => {
      const characters = res.results;
      console.log(characters);
      characters.slice(0, 12).forEach((character) => {
        const li = document.createElement("li");
        li.classList.add("photo-display");
        li.style.width = "150px";
        const img = document.createElement("img");
        img.classList.add("photo-img");
        const p = document.createElement("p");
        img.src = character.image;
        img.value = character.id;
        p.value = character.id;
        p.textContent = character.name;
        li.value = character.id;
        li.appendChild(img);
        li.appendChild(p);
        allChars.appendChild(li);
      });
    })
    .catch((err) => console.log(err));
};

getCharacters();

allChars.addEventListener("click", (e) => {
    fetch(`https://rickandmortyapi.com/api/character/${e.target.value}`)
    .then((res) => {
        if (!res.ok) throw Error("Err:" + res.status);
        return res.json();
    })
    .then((res) => {
        const info = document.querySelector("#character-info");
        info.style.border = "5px solid white";
        const name = document.querySelector("#character-name");
        const species = document.querySelector("#character-species");
        const location = document.querySelector("#character-location");
        const img = document.querySelector("#character-img");
        name.textContent = res.name; 
        species.innerHTML = `<b>Status:</b> ${res.status}`;
        location.innerHTML = `<b>Location:</b> ${res.location.name}`; 
        img.src = res.image;

    })
    .catch((err) => console.log(err));
});
