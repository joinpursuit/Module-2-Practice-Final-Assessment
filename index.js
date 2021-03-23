document.addEventListener("DOMContentLoaded", async () => {
    await axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
        for(const char of response.data.results){
            const li = document.createElement("li")
            const img = document.createElement("img")
            const p = document.createElement("p")
            img.className = "photo-img"
            img.src = char.image
            p.textContent = char.name
            li.append(img, p)
            li.addEventListener("click", ()=> {
                document.title = char.name
                const main = document.querySelector("main")
                if(main.className !== "main-show"){
                    main.className = "main-show"
                }
                const section = document.getElementById("character-info")
                const h3 = document.createElement("h3")
                const img1 = document.createElement("img")
                const p1 = document.createElement("p")
                const p2 = document.createElement("p")
                h3.id = "name"
                h3.textContent = char.name
                img1.src = char.image
                p1.innerHTML = `<b>Status</b>: ${char.status}`
                p2.innerHTML = `<b>Location</b>: ${char.location.name}`
                section.innerHTML = ""
                section.append(h3, img1, p1, p2)
            })
            document.getElementById("all-characters").append(li)
        }
    })

    const form = document.querySelector("form")
    form.addEventListener("submit", event => {
        event.preventDefault()
        const userInput = document.querySelector("input")
        if(!userInput.value.trim()){
            userInput.value = ""
            return
        }
        const li = document.createElement("li")
        li.innerHTML = `<b>${document.getElementById("name").textContent}.</b>: ${userInput.value}`
        document.getElementById("character-comments-ul").append(li)
        userInput.value = ""
    })
})