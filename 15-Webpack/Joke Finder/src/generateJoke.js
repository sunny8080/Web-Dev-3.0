import axios from 'axios'

async function generateJoke() {
  const res = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
  if (res) {
    document.getElementById('joke').innerHTML = res.data.joke;
  }
  console.log("sdf");
}

export default generateJoke
