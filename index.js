//`li`'s with an image (id=`photo-img`) of each character in the API (first page only), as well as 
// the characters name.
console.log("WTF?!")

const mainTag = document.createElement("main")
const body = document.querySelector("body")
body.appendChild(mainTag)

const charInfo = document.createElement("section")
charInfo.setAttribute("id", "character-info")
mainTag.appendChild(charInfo)

const charCommentSec = document.createElement("section")
charCommentSec.setAttribute("id", "character-comments-section")
mainTag.appendChild(charCommentSec)

const h3 = document.createElement("h3")
const h3Image = document.createElement("img")
const pTagOne = document.createElement("p")
const pTagTwo = document.createElement("p")
charInfo.appendChild(h3, h3Image, pTagOne, pTagTwo)

const form = document.createElement("form")
const textInput = document.createElement("input")
const submitInput = document.createElement("input")
// On submission the input should clear.
charCommentSec.appendChild(form)

// const ul = document.createElement("ul")
// ul.setAttribute("id", "character-comments-ul")
// charCommentSec.appendChild(ul)

debugger
fetch("https://rickandmortyapi.com/api/character")
.then((res) => {
    debugger
    if(!res.ok) throw Error(`Something smells fishy!" ${res.status}`);
    return res.json();
})
.then((res) => {
    debugger
    res.results.forEach((person) => {
        const ul = document.querySelector("#all-characters")
        const li = document.createElement("li")
        const img = document.createElement("img")
        li.textContent = person.name
        img.src = person.image
        ul.appendChild(li)
        ul.appendChild(img)
    })

})