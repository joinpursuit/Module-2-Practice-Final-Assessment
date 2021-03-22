// const axios = require('axios');

document.addEventListener("DOMContentLoaded", (eve) =>{
    eve.preventDefault();
  
    let guys = [];

    let ul = document.getElementById("all-characters")
    const chars = async function loadingCharacters() {
        await fetch("https://rickandmortyapi.com/api/character")
        .then(body => body.json()).then(data => {
            // console.log(data)
            data.results.forEach(kee => {
                console.log('kee : ')
                console.log(kee)
                guys.push(kee);
                let li = ul.appendChild(document.createElement('li'))
                let image = li.appendChild(document.createElement('img'))
                image.setAttribute('src',kee.image)

            });
        })
    }

    console.log("Function called : ");
    console.log(chars());
    console.log("Characters : ");
    console.log(guys)
});