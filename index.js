const allCharacters = document.querySelector('#all-characters');
const main = document.querySelector('main');
const name = document.querySelector('#character-name');
const image = document.querySelector('#character-img');
const status = document.querySelector('#character-status');
const clocation = document.querySelector('#character-location');
const title = document.querySelector('title');
const form = document.querySelector('form');
const comments = document.querySelector('#character-comments-ul')
const getAllCharacters = async () => {
    try {
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        res.data.results.forEach(character => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');
            img.src = character.image;
            img.value = character.id;
            p.textContent = character.name;
            li.appendChild(img);
            li.appendChild(p);
            allCharacters.appendChild(li);
        });
    } catch (error) {
        console.log(error);
    }
}
getAllCharacters();

allCharacters.addEventListener('click' , async (e)=> {
    main.style.display = 'flex';
    const url = `https://rickandmortyapi.com/api/character/${e.target.value}`;
    const res = await axios.get(url);
    name.textContent = res.data.name;
    image.src = res.data.image;
    status.innerHTML = `<b>Status:</b> ${res.data.status}`;
    clocation.innerHTML = `<b>Location:</b> ${res.data.location.name}`;
    title.textContent = res.data.name;
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const comment = document.querySelector('#comment')
    const cValue = comment.value;
    const li = document.createElement('li');
    li.innerHTML = `<b>${title.textContent}:</b> ${cValue}`;
    comments.appendChild(li);
    comment.value = '';
})