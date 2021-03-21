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
		const input = document.querySelector("#user-text");

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
		ul.addEventListener("click", async (e) => {
			// e.target give us the img url
			const selectedPic = e.target.src;
			// e.target.nextElementSibling gives us the p tag
			const selectedPicName = e.target.nextElementSibling.textContent;
			// update title
			title.textContent = `Szechuan Sauce ${selectedPicName}`;
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
				pStatus.textContent = `Status: ${status}`;
				main.appendChild(pStatus);
				// display location
				const pLocation = document.createElement("p");
				pLocation.textContent = `Location: ${location}`;
				main.appendChild(pLocation);
				// question

				// check visiblility for hidden or visible
				// getting an empty string as the value when uncommented
				if (main.style.visibility === "hidden") {
					main.style.visibility === "visible";
				}

				// listen to the submit on the form 
                form.addEventListener("submit", (e) => {

                })
				// get the input.value
				// create ul
				// create li and give input.value
				// append li  to the ul
				// input clears
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
