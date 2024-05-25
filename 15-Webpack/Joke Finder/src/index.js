import './styles/main.scss'
import laughingEmoji from './assets/laughing-emoji.svg'
// import generateJoke from './generateJoke.js';
import generateJoke from './generateJoke'

const laughingImg = document.getElementById('laughing');
laughingImg.src = laughingEmoji

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
