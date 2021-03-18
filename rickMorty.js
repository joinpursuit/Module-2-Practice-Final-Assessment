let form = document.getElementById('form')
let allComments = document.getElementById("character-comments-ul")
let userInput = document.getElementById('input')
let title = document.querySelector('title')
let h3 = document.querySelector('h3')
let h2 = document.createElement('h2')

form.addEventListener('submit',(event)=>{
  event.preventDefault()
  let liComment = document.createElement('li')
liComment.classList.add("li-class-comments");
liComment.innerHTML = `<b>${title.textContent}:</b> ${event.target.input.value}`;
allComments.appendChild(liComment)
  userInput.value =""
})


const showMain = (el)=>{
  let main = document.querySelector('main')
  main.style.visibility = "visible"
  let showImage = document.getElementById('show-image')
  showImage.src = el.image
  showImage.setAttribute("height", "300");
  let h3 = document.querySelector('h3')
  let status = document.querySelector('#status')
  let location = document.querySelector('#location-name')
  let title = document.querySelector('title')
  let label = document.querySelector('label')
  label.textContent.innerHTML = ""
  h3.textContent = el.name
  status.textContent = `status: ${el.status}`
  location.textContent = `location: ${el.location.name}`
  title.textContent = el.name
  label.textContent = `What would this character say about Jerry?`
}



let ulChars = document.getElementById('all-characters')
const getRickAndMorty = async (event) => {
  try {
    let res = await axios.get("https://rickandmortyapi.com/api/character/");
    twentyChars = res.data.results
    twentyChars.forEach(el => {
      let liChar = document.createElement('li')
     liChar.id = "photo-img"
     let eachChar = document.createElement('img')
            eachChar.setAttribute("width", "200");
         eachChar.setAttribute("height", "200");
     let textChar = document.createElement('figcaption')
     textChar.textContent = el.name
     eachChar.src = el.image
     liChar.appendChild(eachChar)
     liChar.appendChild(textChar)
     ulChars.appendChild(liChar)
     liChar.addEventListener('click',(event)=>{
showMain(el)
     })            
   });
  } catch (err) {
    console.log(err);
  }
};





document.addEventListener('DOMContentLoaded',(event)=>{
  getRickAndMorty()
})






// <!-- 
//     This **burp** app should have (in order of placement in the HTML):
//     - A title tag that starts with the text "Szechuan Sauce"
//     - A header tag. Make it mean and make it green. 
//     - Inside the header an `h1` that reads "Rick & Morty" with fantasy font.
//     - Inside the header an image of Rick and Morty (check your assets folder!)
    
//     - A `ul` with the id `all-characters` that contains an `li`'s with an image (id=`photo-img`) of each character in the API (first page only), as well as the characters name.
//     - A `main` tag that starts not on the page
//     - Inside of `main` should be two sections. The first section should have the id `character-info` the second should have the id `character-comments-section`.
//     - Inside of `character-info` should be be an `h3` an `img` and two `p` tags. 
//     - Inside of `character-comments-section` should be a `form`, including a "text" `input` and a "submit" `input`, that allows users to submit (not save, just add to the frontend) what they would say about the character Jerry. On submission the input should clear.
//     - Also insider `character-comments-section`  should be a `ul` with the id `character-comments-ul` that contains the submitted comments of each character.
    
//     Please feel free to include additional `section`s and elements if they make styling the **burp** app easier.
    
//     The user should be able to:
    
//     - Side scroll through the `all-characters` ul and click on a character. When they select a character, the `main` should appear and information about that character (name, image, status, location name) should populate in the `character-info` section. When they click on a different character, this information should be replaced. The page `title` should also match the name of the character selected. 
//     - Use the `form`, to submit a character comment. Each comment should be a new `li` inside of `character-comments-ul`, with the selected character's name (in bold) and a comment (not bold).
//     <title>Szechuan Sauce</title> -->