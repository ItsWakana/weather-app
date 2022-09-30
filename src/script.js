import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';

const location = 'London';

const getCurrentTempFromApi = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
        mode: 'cors'
    });

    const data = await response.json();
    return data.main.temp;
}

async function convertFromKelvin() {
    const kelvinValue = await getCurrentTempFromApi(location)

    const celsius = convertToCelsius(kelvinValue);
    const fahrenheit = convertToFahrenheit(kelvinValue);

    return { celsius, fahrenheit };
}

window.addEventListener('DOMContentLoaded', () => {
    convertFromKelvin()
    .then((objTemps) => {
        console.log(objTemps);
    });
});




