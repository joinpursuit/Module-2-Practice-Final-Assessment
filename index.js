// click on a character.
// When they select a character, the `main` should appear and information about that
// character (name, image, status, location name) should populate in the `character-info` section.
// When they click on a different character, this information should be replaced.
// The page `title` should also match the name of the character selected. 
// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of
// `character-comments-ul`, with the selected character's name (in bold) and a comment (not bold).


fetch("https://rickandmortyapi.com/api/character?page=1")
  .then((res) => {
    if (!res.ok) {
      throw Error(`Girrrl ya wrong! ${res.status}`);
    }
    return res.json();
  })
  .then((res) => {
    // debugger
    res.results.forEach((char) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      p.textContent = char["name"]; // display name
      img.src = char["image"]; // display image
      li.classList.add("photo-img"); 
      ul.appendChild(li);
      li.appendChild(img);
      li.appendChild(p);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const body = document.querySelector("body");

const displayMain = (event) => {
  const main = document.createElement("main");
  body.appendChild(main);
  // debugger
};

body.addEventListener("click", displayMain);

// event.currentTarget.childNodes[9]
