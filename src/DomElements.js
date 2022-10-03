import { format } from "./script";

export const renderTemp = (obj) => {
    const display = document.querySelector('.display');
    if (format === 'celsius') {
        display.innerText = `${obj.celsius} °C`;
    } else {
        display.innerText = `${obj.fahrenheit} °F`
    }
}

export const renderLocation = (location) => {
    const locationDisplay = document.querySelector('.display-location');

    locationDisplay.innerText = `The temperature in ${location} is:`
}

export const getLocationInput = () => {
    const inputField = document.getElementById('search-place').value;

    return inputField;
}