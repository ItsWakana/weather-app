import { clearInput, getLocationInput, renderDescription, renderLocation, renderTemp } from './DomElements';
import { fetchGif } from './gifGeneration';
import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';
import magnifyingGlass from '/src/assets/magnifying-glass.svg';

export let format;

const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {
    try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
        mode: 'cors'
    });

    const data = await response.json();
    // console.log(data.weather[0].description);
    const kelvin = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const tempObj = convertFromKelvin(kelvin);
    return { tempObj, weatherDescription };
    } catch(error) {
        alert('No results for the location you have input');
    }

}

function convertFromKelvin(kelvinVal) {

    const celsius = Math.round(convertToCelsius(kelvinVal));
    const fahrenheit = Math.round(convertToFahrenheit(kelvinVal));

    return { celsius, fahrenheit };
}

searchButton.addEventListener('click', () => {
    const location = getLocationInput();
    getCurrentTempFromApi(location)
    .then((obj) => {
        if (obj.tempObj === undefined) {
            return;
        }
        renderTemp(obj.tempObj);
        renderLocation(location);
        renderDescription(obj.weatherDescription);
    })
    .then(() => {
        fetchGif(location);
    })
    .catch((error) => console.log(error));
});

const toggles = document.querySelectorAll('[data-toggle]');
toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggles.forEach((toggle) => toggle.classList.remove('active'));
        toggle.classList.add('active');

        toggle.dataset.toggle === 'celsius' ? format = 'celsius' :
        format = 'fahrenheit';
    });
});




