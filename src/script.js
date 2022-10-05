import { clearInput, getLocationInput, renderDescription, renderLocation, renderTemp } from './DomElements';
import { fetchGif } from './gifGeneration';
import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';
import magnifyingGlass from '/src/assets/magnifying-glass.svg';
import refresh from '/src/assets/refresh.svg';

export let format;

const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {

    const refresh = document.querySelector('.refresh-icon');
    try {
        refresh.classList.add('visible');
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
            mode: 'cors'
        });
        
        const data = await response.json();
        refresh.classList.remove('visible');

        const kelvin = data.main.temp;
        const weatherDescription = data.weather[0].description;

        const tempObj = convertFromKelvin(kelvin);
        return { tempObj, weatherDescription };
    } catch(error) {
        alert('There are no results for the location you have entered');
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
        return obj;
    })
    .then((obj) => {
        fetchGif(obj);
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




