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
