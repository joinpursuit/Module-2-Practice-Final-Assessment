document.addEventListener('DOMContentLoaded', eve => {
  eve.preventDefault()

  const attConstr = function attributesConstructor (
    str = '',
    obj = {},
    text = ''
  ) {
    let elemento = document.createElement(str)
    for (kee in obj) {
      elemento.setAttribute(kee, obj[kee])
    }
    if (text !== '') {
      elemento.textContent = text
    }
    return elemento
  }


  const main = function createMain () {
    let mainTag = document.body.appendChild(document.createElement('main'))

    let sectionOne = mainTag.appendChild(attConstr('section',{'id':'character-info'}))
    sectionOne.appendChild(attConstr('h3', { 'id': 'character-name' }))
    sectionOne.appendChild(attConstr('img',{'id':'character-img'}))
    sectionOne.appendChild(attConstr('p',{'id':'character-species'}))
    sectionOne.appendChild(attConstr('p',{'id':'character-location'}))

    let sectionTwo = mainTag.appendChild(attConstr('section',{'id':'character-comments-section'}))
    let secTwoForm = sectionTwo.appendChild(document.createElement('form'))
    let secTwoUl = sectionTwo.appendChild(attConstr('ul',{'id':'character-comments-ul'}))

    let h2InForm = secTwoForm.appendChild(document.createElement('h2'))
    h2InForm.textContent = 'What would this character say about Jerry?'

    let firstInput = secTwoForm.appendChild(attConstr('input',{'type':'text'}))
    firstInput.required = true

    let secondInput = secTwoForm.appendChild(attConstr('input',{'type':'submit','value':'Comment'}))

  }

  const chars = async function loadingCharacters () {
    let ul = document.getElementById('all-characters')
    await fetch('https://rickandmortyapi.com/api/character')
      .then(body => body.json())
      .then(data => {
        data.results.forEach(kee => {
          let li = ul.appendChild(document.createElement('li'))

          let picture = li.appendChild(attConstr('img',{'src':kee.image, 'class':'photo-img'}))
            
          picture.addEventListener('click', evnt =>{
              evnt.preventDefault()
              document.querySelector('title').textContent = kee.name
              document.querySelector('main').setAttribute('style','display: flex')
              document.getElementById('character-name').textContent = kee.name
              document.getElementById('character-img').setAttribute('src',kee.image)
              document.getElementById('character-img').setAttribute('style','width: 300px; height:300px;')

              document.getElementById('character-species').innerHTML = `<b>Status:</b> ${kee.status}`
              document.getElementById('character-location').innerHTML = `<b>Location:</b> ${kee.location.name}`
            
           
            document.querySelector('input:nth-child(3)').addEventListener('click', vnt =>{
                vnt.preventDefault()
                console.log('submit clicked')
                let commentLi = document.getElementById('character-comments-ul').appendChild(document.createElement('li'))
                commentLi.innerHTML = `<b>${kee.name}:</b> ${document.querySelector('input:nth-child(2)').value}`
                document.querySelector('input:nth-child(2)').value = ''
            })
         
          
        })

        
          let name = li.appendChild(document.createElement('p'))
          name.textContent = kee.name
        })
      })
  }
  main()
  chars()


  // console.log(document.getElementById('all-characters').);
  // console.log("Function called : ");
  // console.log(chars());
  // console.log("Characters : ");
  // console.log(guys)
})
