let main = document.querySelector("main")
main.style.visibility = "hidden"

const charInfo = async () => {

    let list = document.getElementById("all-characters")
    let info = await axios.get("https://rickandmortyapi.com/api/character/?page=1")
    let chars =  info.data.results

    let h3 = document.getElementById("h3")

    chars.forEach(char => {

        let item = document.createElement("li")
        item.id ="item"

        let img = document.createElement("img")     
        img.id = "photo-img"
        img.src = char.image 

        let name = document.createElement("p")
        name.textContent = char.name
   
        list.appendChild(item)
        item.appendChild(img)  
        item.appendChild(name)

        item.addEventListener("click" , () => {
      
            let pic = document.getElementById("img")
            let status = document.getElementById("status")
            let location = document.getElementById("location")
            let title = document.getElementById("title")


            title.innerHTML = char.name
            main.style.visibility= "visible"
            h3.textContent = char.name
            pic.src = char.image
    
            status.innerHTML = `<b>Status:</b> ${char.status}`
            location.innerHTML = `<b>Location:</b> ${char.location.name}`   
            
        })  

    })



    let form = document.getElementById("form")
        
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


}

charInfo()