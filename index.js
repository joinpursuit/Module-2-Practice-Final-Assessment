

// const body = document.querySelector("body");

// fetch("http://localhost:3000/cars/")
//   .then((res) => {
//     // debugger
//     if (!res.ok) {
//       throw Error(`Girrrl ya wrong! ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((res) => {
//     res.cars.forEach((el) => {
//       const div = document.createElement("div");
//       div.textContent = el["model"];
//       body.appendChild(div);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const ul = document.querySelector("ul");

fetch("https://rickandmortyapi.com/api/character?page=1")
.then((res) => {
    if (!res.ok) {
        throw Error(`Girrrl ya wrong! ${res.status}`);
    }
    return res.json();
}) .then((res) => {
    res.results.forEach((char, i) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.textContent = char["name"]; // display name
        img.src = char["image"]; // display image
        ul.appendChild(li);
        li.appendChild(img);
    })

  })
