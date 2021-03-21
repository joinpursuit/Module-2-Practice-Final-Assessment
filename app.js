//base link  https://rickandmortyapi.com/api

// 1. get all the character from the first page as soon as the DOM loads

document.addEventListener("DOMContentLoaded", async (e) => {
  try {
    const characters = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const ul = document.querySelector("ul");
    characters.data.results.forEach((character) => {
      //looping through the promises the array of objects each element of the array is an indivual object
      //image
      //create the li
      const li = document.createElement("li");
      li.setAttribute("id", "photo-img");
      const image = document.createElement("img"); //created image tag
      image.src = character.image; //image value/ for each character we are getting the image  and storing it. We assign the image in the HTML to the src and store it there
      li.appendChild(image);

      //name
      const p = document.createElement("p");
      p.setAttribute("id", "character-name");
      p.textContent = character.name;
      li.appendChild(p);
      ul.appendChild(li);
      //status
      //location
    });
  } catch (err) {
    console.log(err);
  }
});
