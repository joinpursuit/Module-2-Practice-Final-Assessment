// - API endpoint
// ~20 characters
// name & image up top
// name, image, status, location in form @ bottom
// main display formatiing is none, and then with the click of the picture, the main section displays.
// comments append the the li

const carousel = document.querySelector("#all-characters");
const characterHeader = document.querySelector("#character-header");
const characterImage = document.querySelector("#character-img");
const characterStatus = document.querySelector("#character-status");
const characterLocation = document.querySelector("#character-location");
const main = document.querySelector("main");
const pageTitle = document.querySelector("title");
const commentForm = document.querySelector("form");
const commentHistory = document.querySelector("#character-comments-ul");

const characters = async () => {
  try {
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    res.data.results.forEach((el) => {
      const li = document.createElement("li");
      li.classList.add("photo-img");
      const img = document.createElement("img");
      const p = document.createElement("p");
      img.src = el.image;
      p.textContent = el.name;
      carousel.appendChild(li);
      li.appendChild(img);
      li.appendChild(p);
    });
  } catch (err) {
    console.log(err);
  }
};
characters();

carousel.addEventListener("click", async (e) => {
  try {
    main.style.display = "flex";
    const res = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const chosenCharacter = e.target.parentElement.innerText;
    pageTitle.textContent = chosenCharacter;
    res.data.results.forEach((el) => {
      if (el.name === chosenCharacter) {
        characterHeader.textContent = el.name;
        characterImage.src = el.image;
        characterStatus.innerHTML = `<b>Status:</b> ${el.status}`;
        characterLocation.innerHTML = `<b>Location:</b> ${el.location.name}`;
      }
    });
  } catch (err) {
    console.log(err);
  }
});

commentForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const comment = document.querySelector("#user-comment");
    const li = document.createElement("li");
    debugger
    li.classList.add("character-comments");
    li.innerHTML = `<b>${pageTitle.textContent}:</b> ${comment.value}`;
    commentHistory.appendChild(li);
    comment.value = "";
  } catch (err) {
    console.log(err);
  }
});
