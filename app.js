// get all the characters from the first page of the API as soon ss the page loads ==> DOMContentLoaded
document.addEventListener("DOMContentLoaded", async (e) => {
	try {
		const characters = await axios.get(
			"https://rickandmortyapi.com/api/character"
		);
		const ul = document.querySelector("ul");
		const title = document.querySelector("title");
		const main = document.querySelector("main");
		const form = document.querySelector("form");
		const userInput = document.querySelector("#user-text");
		const commentUl = document.querySelector("#character-comments-ul");

		// loop the characters to get data for each
		characters.data.results.forEach((character) => {
			// create the li
			const li = document.createElement("li");
			li.setAttribute("id", "photo-img");
			// image
			const img = document.createElement("img");
			img.src = character.image;
			// can add the value to the image as well
			img.value = character.id;
			li.appendChild(img);
			// name
			const p = document.createElement("p");
			p.setAttribute("id", "character-name");
			p.textContent = character.name;
			li.appendChild(p);
			ul.appendChild(li);
		});

		// listen for the click on the image
		ul.addEventListener("click", async (e) => {
			// e.target give us the img url
			const selectedPic = e.target.src;
			// e.target.nextElementSibling gives us the p tag
			const selectedPicName = e.target.nextElementSibling.textContent;
			// update title
			title.textContent = `${selectedPicName}`;
			// display main
			main.style.visibility = "visible";

			// get character info
			try {
				const charactersInfo = await axios.get(
					`https://rickandmortyapi.com/api/character/?name=${selectedPicName}`
				);
				// const image = charactersInfo.data.
				const status = charactersInfo.data.results[0].status;
				const location = charactersInfo.data.results[0].location.name;

				// display name
				nameH3 = document.createElement("h3");
				nameH3.textContent = selectedPicName;
				main.appendChild(nameH3);
				// display image
				image = document.createElement("img");
				image.src = selectedPic;
				main.appendChild(image);

				// display status
				const pStatus = document.createElement("p");
				pStatus.innerHTML = `<b>Status:</b> ${status}`;
				main.appendChild(pStatus);
				// display location
				const pLocation = document.createElement("p");
				pLocation.innerHTML = `<b>Location:</b> ${location}`;
				main.appendChild(pLocation);
				// question

				// listen to the submit on the form
				form.addEventListener("submit", (e) => {
					e.preventDefault();
					// get the input.value
					const comment = userInput.value;
					// create li and give input.value
					li = document.createElement("li");
					li.innerHTML = `<b>${selectedPicName}:</b> ${comment}`;
					// append li  to the ul
					commentUl.appendChild(li);

					// input clears
					userInput.value = "";
				});
			} catch (err) {
				console.log(err);
			}
		});
	} catch (err) {
		console.log(err);
	}
});

//  **** N O T E S ****
// https://rickandmortyapi.com/api
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location"
// }

// https://www.educative.io/edpresso/how-to-add-an-id-to-element-in-javascript
// ASSIGN AN ID ==> TAG/VARIABLE.setAttribute(‘id’,‘ID-NAME’);
// ADD MULTIPLE ATTRIBUTES ==> TAG/VARIABLE.setAttribute(‘class’, ‘CLASS-NAME’);
