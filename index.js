const ul = document.querySelector("#characters-list")
// const characterId
const loadPage = async () =>{
    try {
        const characters = await axios.get("https://rickandmortyapi.com/api/character")
        characters.data.results.forEach(character => {
            const characterElement = document.createElement("div");
            const img = document.createElement("img")
            const name = document.createElement("h5")
            name.innerText = character.name
            name.value = character.id 
            img.src = character.image
            img.value = character.id
            characterElement.appendChild(img)
            characterElement.appendChild(name)
            characterElement.value = character.id
            ul.appendChild(characterElement)
        });
    } catch (error) {
        console.log(error);
    }

}

loadPage()

ul.addEventListener("click", async(e) =>{
    const currentCaracter = await axios.get(`https://rickandmortyapi.com/api/character/${e.target.value}`)
    console.log(currentCaracter.data.name)
})