import './style.css';
import { convertToCelsius, convertToFahrenheit } from './utilities';

const location = 'Arctic Village';

const getCurrentTempFromApi = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8ff600f260cf77d42329c37dcecce5f4`, {
        mode: 'cors'
    });

    const data = await response.json();
    return data.main.temp;
}

    getCurrentTempFromApi(location)
    .then((response) => {

        const celsius = convertToCelsius(response);
        const fahrenheit = convertToFahrenheit(response);
        
        let temps = { celsius, fahrenheit }
        console.log(temps);
    });




