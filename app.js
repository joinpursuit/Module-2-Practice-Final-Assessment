//  **** N O T E S ****
// https://rickandmortyapi.com/api
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location"
// }

// https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
// ASSIGN AN ID ==> TAG/VARIABLE.setAttribute(‘id’,‘ID-NAME’);
// ADD MULTIPLE ATTRIBUTES ==> TAG/VARIABLE.setAttribute(‘class’, ‘CLASS-NAME’);

// get all the characters from the first page of the API as soon s the page loads ==> DOMContentLoaded
document.addEventListener("DOMContentLoaded", async (e) => {
	try {
		const characters = await axios.get(
			"https://rickandmortyapi.com/api/character"
			// "https://rickandmortyapi.com/api/character/?page=1"
		);
		const ul = document.querySelector("ul");

		// loop the characters to get data for each
		characters.data.results.forEach((character) => {
			// create the li
			const li = document.createElement("li");
			li.setAttribute("id", "photo-img");
			// image
			const img = document.createElement("img");
			img.src = character.image;
			li.appendChild(img);
			// name
			const p = document.createElement("p");
			p.setAttribute("id", "character-name");
			p.textContent = character.name;
			li.appendChild(p);
			ul.appendChild(li);
		});

		// listen for the click on the image
        ul.addEventListener("click", (e) => {
            // e.target give us the img url
            const selectedPic = e.target;
            // e.target.nextElementSibling gives us the p tag
            const selectedPicName = e.target.nextElementSibling.textContent;
            // change main to visibility: visible
            
            debugger
        })
		// display name
		// display image
		// display status
		// display location
		// question

		// listen to the submit
		// get the input.value
		// create ul
		// create li and give input.value
		// append li  to the ul
		// input clears
	} catch (err) {
		console.log(err);
	}
});
