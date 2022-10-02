import { getLocationInput, renderTemp } from './DomElements';
import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';

const location = 'Arctic Village';

const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
        mode: 'cors'
    });

    const data = await response.json();
    return data.main.temp;
}

async function convertFromKelvin(location) {
    const kelvinValue = await getCurrentTempFromApi(location)

    const celsius = Math.round(convertToCelsius(kelvinValue));
    const fahrenheit = Math.round(convertToFahrenheit(kelvinValue));

    return { celsius, fahrenheit };
}

searchButton.addEventListener('click', () => {
    const location = getLocationInput();

    convertFromKelvin(location)
    .then((objTemps) => {
        renderTemp(objTemps);
    });
});




