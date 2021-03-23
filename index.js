document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()
    const ul = document.getElementById('all-characters')
    let count = []

    async function char() {
        const result =  await axios.get("https://rickandmortyapi.com/api/character")
        console.log(result.data.results)
        result.data.results.forEach(el => {
            console.log(el)
            count.push(el)



            let card = document.createElement('div')
            if(el.image > 5){
                card.setAttribute('style', 'width: 358px')
            }
            card.textContent = ""
            const li = ul.appendChild(document.createElement('li'))
            const img = li.appendChild(document.createElement('img'))
            img.setAttribute('src', el.image )
            img.setAttribute('style','higth: 20px')
            card.appendChild(img)
            img.src = el.image
    




        });
    
    
        
    }

   

   

    char()
})


// console.log(el.name)
// let {name, status} = result.data.results[0]
// let{name: location}= result.data.results[0].origin
// let img = result.data.results[0].image
// console.log(name)
// console.log(status)
// console.log(location)
// console.log(img)

// 
// 
// let photo =document.getElementById('photo')
// photo.textContent =  `<img src="assets/1.jpeg">`
// 




// let info = document.getElementById('character-info')
//         let h3 = document.querySelector('h3')
//         h3.textContent = name
//         let first = document.getElementById('first')
//         first.textContent = ` Status: ${status}`
//         let second = document.getElementById('second')
//         second.textContent = `Location: ${location}`
//         info.appendChild(h3, photo,  first, second)
        
//         const form = document.querySelector('form')
//         const input = document.querySelector('input')
//         const ul2 = document.getElementById('character-comments-ul')
//         const button = document.querySelector('button')
//         button.addEventListener('submit', e =>{
//             e.preventDefault()
//             let li = document.createElement('li')
//             li.textContent = input.value
//             ul2.appendChild(li)
            
//         })
//         form.appendChild(ul2)
      