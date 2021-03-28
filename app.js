//New Code part one - sidescroll through all characters
//first thing to do is get all character using the API endpoint.
//1. create an async function that uses await on our promise
// 2. Create a function using res which returns the response objects ,get API ,
//3. put in try and catch
//4. console.log(res) to see object print in console
//5.call your function at the end
//6.grab your selector and place above function, for the ul we are appending the images from API , images will be li's so we need to also create li's in the function and append
//7. we need a foreach loop tp iterate loop and get the keys we need
//8. the forEach loop is added to the way we key into the API  to access the results and what we are iterating through is each character
//9.create the li that will hold the images , and append to the ul tag #all-characters
//10. create elements in the HTML using JS also for the name under the image (img and a p tag for name)
//11. console.log under the created elements to see what we iterated through in the loop (character)
//12. We get the path to the character name and image by looking in the object to get the keys used , for the img it is character.image and for the name it is character.name
//13. img.src is used to store the url source of the img and the p.innerTEXT is used to store/reassign each character.name
//14. Then we append the img and p to the li
//15. Then we append the li for the img and p above to the ul (allcharacters)
//SELECTORS
const main = document.querySelector("main");
const name = document.querySelector("#character-name");
const image = document.querySelector("#character-image");
const status = document.querySelector("#character-status");
const place = document.querySelector("#character-location");
const allCharacters = document.querySelector("#all-characters"); //ul
const title = document.querySelector("title");
const form = document.querySelector("form");
const comments = document.querySelector("#character-comments-ul");
const getAllCharacters = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    res.data.results.forEach((character) => {
      debugger;
      const li = document.createElement("li");
      const img = document.createElement("img");
      const p = document.createElement("p");
      img.src = character.image;
      img.value = character.id; //assign object images an id,we can now access the character image based on the respective id numnber
      p.innerText = character.name;
      li.appendChild(img);
      li.appendChild(p);
      allCharacters.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
};
getAllCharacters();

//Part Two : add and eventlisterner to listen for the click and show box with info
//1. Creat an event listner with (e) and click
//2.listen to the ul which is where we have the image and name of characters
//3. then console.log(e.target) which shows what is the event targeting, we should get the image in the console
//4.In the API get URL for single character to get name , status, location
//5.Get the API link and put it in a function URL and replace the id at the end with the e.target.value which is HOW WE ACCEESS THE ID FROM THE DATA
//6. place a debugger after our res
//7.now populate the name,location and status in the red box when clicked
//8.grab main at top in sselectors
//9. when we click on an image we want the box to appear input ln53, there is no toggle action so dont need an iF statement
//10.grab all we need in selectors - name,image,status.location
//12. assign location and status
//13.change title , first grab the title above

// const name = document.querySelector("#character-name");
// const image = document.querySelector("#character-img");
// const status = document.querySelector("#character-status");
// const place = document.querySelector("#character-location");

allCharacters.addEventListener("click", async (e) => {
  //this holds all the images
  main.style.display = "flex"; //orient in row
  const url = `https://rickandmortyapi.com/api/character/${e.target.value}`;
  const res = await axios.get(url); //stores url in res
  //11.get name
  name.innerText = res.data.name; //reassign value
  image.src = res.data.image; //reassign value
  status.innerHTML = `<b>Status:<b> ${res.data.status}`; //status in bold so thats why we use innerHTML here
  place.innerHTML = `<b>Location:<b> ${res.data.location.name}`; //also in bold
  title.innerText = res.data.name; //give it the name of the different character in the browser bar
});

//PART 3 THE FORM
//1. add event listner
//2. prevent the text box from refresher with e.prevent
//3.grab the form and the character-comments-ul id because this is where we append the li's for the input by user
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment"); //4. grab the input id, value is used to get value of input
  const li = document.createElement("li"); //crete li for each comment
  li.innerHTML = `<b> ${title.textContent}: </b> ${comment.value}`; //puts li = to the name displayed in the browser when img is clicked and prints the title/name and comment that is input by user, value is placed here beacuse it is our input
  comments.appendChild(li); //append child li to the ul(character-comments-ul)
  comment.value = ""; //input box -> comment , get the value and = "" to clear box
  debugger;
});
//Orginial Code
//base link  https://rickandmortyapi.com/api

// 1. get all the character from the first page as soon as the DOM loads

// document.addEventListener("DOMContentLoaded", async (e) => {
//   try {
//     const characters = await axios.get(
//       "https://rickandmortyapi.com/api/character/?page=1"
//     );
//     const main = document.querySelector("main");
//     const title = document.querySelector("title");
//     const ul = document.querySelector("ul");
//     const form = document.forms.comment;
//     const formInput = form.elements.textinput;
// const userInput = document.querySelector("#user-text");

// characters.data.results.forEach((character) => {
//looping through the promises the array of objects each element of the array is an indivual object
//image
//create the li
//   const li = document.createElement("li");
//   li.setAttribute("id", "photo-img");
//   const image = document.createElement("img"); //created image tag
//   image.src = character.image; //image value/ for each character we are getting the image  and storing it. We assign the image in the HTML to the src and store it there
//   li.appendChild(image);

//name
//   const p = document.createElement("p");
//   p.setAttribute("id", "character-name");
//   p.textContent = character.name;
//   li.appendChild(p);
//   ul.appendChild(li);
// });

// const nameH3 = document.createElement("h3");
// const image = document.createElement("img");
// const statusText = document.createElement("p");
// const pStatus = document.createElement("p");

// ul.addEventListener("click", async (e) => {
//display  main
//   main.style.visibility = "visible";
//   const selectedPic = e.target.src; //gives us image URL
//e.target.nextElementSibling gives us the p tage/name of character
//   const selectedPicName = e.target.nextElementSibling.textContent;
//change main to visibility :viisble
//   title.textContent = `Szechuan Sauce ${selectedPicName}`;

//   try {
//     const charactersInfo = await axios.get(
//       `https://rickandmortyapi.com/api/character/?name=${selectedPicName}`
//     );
//status
// const status = charactersInfo.data.results[0].status;
//location
// const location = charactersInfo.data.results[0].location.name;
// main.nameH3.textContent = "";
//display name
// const nameH3 = document.createElement("h3");
// nameH3.textContent = selectedPicName;
// main.appendChild(nameH3);
// nameH3.textContent = "";
//display image
// const image = document.createElement("img");
// image.src = selectedPic;
// main.appendChild(image);

//display status
// const statusText = document.createElement("p");
// statusText.innerHTML = `<b>Status:<b> ${status}`;
// main.appendChild(statusText);

//Location
// const pStatus = document.createElement("p");
// pStatus.innerHTML = `<b>Location:<b> ${location}`;
// main.appendChild(pStatus);

//question

//Listen to the submit on the form
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//get the input.value
//   const comment = formInput.value;

//creete li and give input.value
//   li = document.createElement("li");
//   li.innerHTML = `<b>${selectedPicName}:<b> ${comment}`;
//append li to the ul
//   const commentUL = document.querySelector("#character-comments-ul");
//   commentUL.appendChild(li);

//input clears
//           formInput.value = "";
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

//use this if we were turning the visibilty on and off
// if (main.style.visibility === "hidden") {
//     main.style.visibility === "visible";
//   }
