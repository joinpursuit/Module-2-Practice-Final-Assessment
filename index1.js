let main = document.querySelector("main")
main.style.visibility = "hidden"

let list = document.getElementById("all-characters")
let pic = document.getElementById("img")
let status = document.getElementById("status")
let locatioN = document.getElementById("location")
let title = document.getElementById("title")
let h3 = document.getElementById("h3")
let form = document.getElementById("form")


const charReel = async () => {
    let info = await axios.get("https://rickandmortyapi.com/api/character/?page=1")
    let chars = info.data.results

    chars.forEach(char => {
        let item = document.createElement("li")
        item.id ="item"
        item.value = char.id
        

        let img = document.createElement("img")     
        img.id = "photo-img"
        img.src = char.image 
        img.value = char.id

        let name = document.createElement("p")
        name.textContent = char.name
        name.value = char.id

        list.appendChild(item)
        item.appendChild(img)  
        item.appendChild(name)
    })

}



charReel()


   
list.addEventListener("click", async (e) => {
    let info = await axios.get(`https://rickandmortyapi.com/api/character/${e.target.value}`)
    main.style.visibility = "visible"
    title.innerHTML = info.data.name

    h3.innerText = info.data.name
    pic.src = info.data.image
    status.innerHTML = `<b>Status:</b> ${info.data.status}`
    locatioN.innerHTML = `<b>Location:</b> ${info.data.location.name}`
})




form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    error.textContent = ""
        
    let input = document.getElementById("input").value  
    form.reset()
        
    if (input){
        let comment = document.createElement("li")

        comment.innerHTML = `<b>${h3.textContent}:</b> ${input}`

        let charComments = document.getElementById(`character-comments-ul`)
        
        charComments.appendChild(comment)
        
    } else {

        let error = document.getElementById("error")
            
        error.textContent = "Must Input Text Above"

        }
        
    })








 
