const body = document.querySelector("body");
const ul = document.querySelector("ul");
const main = document.createElement("main");
body.appendChild(main);


fetch("https://rickandmortyapi.com/api/character?page=1")
  .then((res) => {
    if (!res.ok) {
      throw Error(`Girrrl ya wrong! ${res.status}`);
    }
    return res.json();
  })
  .then((res) => {
    res.results.forEach((char) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      li.textContent = char["name"]; // display name
      img.src = char["image"]; // display image
      ul.appendChild(li);
      li.appendChild(img);
    });
  })
  .catch((err) => {
    console.log(err);
  });


