//using querySelector assign variables to all targets needed for easy function calling

const button = document.querySelector('button');
const addNewJoke = async () => {                    // assign all retrieved data to variables for easy access
    const joke = await getDadJoke();
    const newLi = document.createElement('LI');    // creat a new li
    newLi.append(joke);      //append the retrieved data from web API to the li
    jokes.append(newLi)     //append the li to the ul for clear display.
}
const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {      //using axios send a request to dad jokes API using headers to retrieve random dad joke in JSON format
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (e) {
        return 'Somethings not right, no jokes for you!! :('
    }
}
button.addEventListener('click', addNewJoke); // add event listener click to call addNewJoke function