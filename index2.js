const characterUl = document.querySelector("#all-characters");
// const characterPhoto = document.querySelector("#photo-img");

const getRickAndMortyPics = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");

    res.data.results.forEach(async (character) => {
      const characterLi = document.createElement("li");
      const pictureDiv = document.createElement("div");
      const characterName = document.createElement("p");
      const characterImg = document.createElement("img");

      characterImg.classList.add("photo-img");
      pictureDiv.classList.add("slide")

      characterName.innerHTML = character.name;
      characterImg.src = character.image;

      characterUl.appendChild(characterLi);
      
      characterLi.appendChild(pictureDiv)
      pictureDiv.appendChild(characterImg);
      pictureDiv.appendChild(characterName);
    //   debugger
    });
  } catch {
    console.log("sorry there was an error");
  }
};
getRickAndMortyPics();
// before
