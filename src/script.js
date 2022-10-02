import { getLocationInput, renderTemp } from './DomElements';
import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';

const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
        mode: 'cors'
    });

    const data = await response.json();
    const kelvin = data.main.temp;

    const tempObj = convertFromKelvin(kelvin);
    return tempObj;

}

function convertFromKelvin(kelvinVal) {

    const celsius = Math.round(convertToCelsius(kelvinVal));
    const fahrenheit = Math.round(convertToFahrenheit(kelvinVal));

    return { celsius, fahrenheit };
}

searchButton.addEventListener('click', () => {
    const location = getLocationInput();

    getCurrentTempFromApi(location)
    .then((tempObj) => {
        renderTemp(tempObj);
    });
});




