export const fetchGif = (location) => {
    const gif = document.querySelector('.weather-gif');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AGuC5sBSpLwFCnqHU4p4po65KMPMse9G&s=${location}`, {
    mode: 'cors'
})
.then((response) => {
    return response.json();
})
.then((response) => {
    gif.src = response.data.images.original.url;
})
.catch((error) => console.log(error))
}