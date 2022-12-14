import { clearElements, clearInput, getLocationInput, renderDescription, renderLocation, renderTemp, renderTempSwitch, renderWindAndHumidity } from './DomElements';
import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';

const searchButton = document.querySelector('.search-button');

const getCurrentTempFromApi = async (city) => {
    try {
        const refresh = document.querySelector('.refresh-icon');
        refresh.classList.add('visible');
        refresh.classList.add('rotate');
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
            mode: 'cors'
        });
        
        const data = await response.json();

        refresh.classList.remove('visible');
        refresh.classList.remove('rotate');

        const tempKelvin = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const windSpeed = Math.round(data.wind.speed);
        const humidity = data.main.humidity;

        const tempObj = convertFromKelvin(tempKelvin);

        if (tempObj === undefined) {
            return;
        }
        renderTemp(tempObj);
        renderLocation(city);
        renderDescription(weatherDescription);
        renderWindAndHumidity(windSpeed, humidity);

        renderTempSwitch(tempObj);

        return { tempObj, weatherDescription, windSpeed, humidity }

    } catch(error) {
        alert('There are no results for the location you have entered');
    }

}

function convertFromKelvin(kelvinVal) {

    const celsius = Math.round(convertToCelsius(kelvinVal));
    const fahrenheit = Math.round(convertToFahrenheit(kelvinVal));

    return { celsius, fahrenheit };
}

// searchButton.addEventListener('click', () => {
//     clearElements();
//     const location = getLocationInput();
//     getCurrentTempFromApi(location)
//     .then((obj) => {
//         console.log(obj);
//         if (obj.tempObj === undefined) {
//             return;
//         }
//         renderTemp(obj.tempObj);
//         renderLocation(location);
//         renderDescription(obj.weatherDescription);
//         renderWindAndHumidity(obj);
//         return obj;
//     })
//     .then((obj) => {
//         renderTempSwitch(obj);
//     })
//     .catch((error) => console.log(error));
// });

searchButton.addEventListener('click', () => {
    clearElements();
    const location = getLocationInput();
    getCurrentTempFromApi(location);
});