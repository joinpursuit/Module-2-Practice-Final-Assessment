const allCharacters = document.querySelector("#all-characters");


const getAllCharacters = async () => {
    try {
        const res = await axios.get("https://rickandmortyapi.com/api/character")
        // console.log(res);
        res.data.results.forEach(character => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const p = document.createElement("p");
            // console.log(character);
            img.src = character.image;
            p.innerText = character.name;
            li.appendChild(img);
            li.appendChild(p);
            allCharacters.appendChild(li);
        })
    } catch(err) {
        console.log(err)
    }
}

getAllCharacters();
