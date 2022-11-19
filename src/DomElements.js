let format;

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

    locationDisplay.innerText = `The temperature in ${location} is:`;
}

export const renderDescription = (desc) => {
    const descriptionDisplay = document.querySelector('.display-description');
    const capitalize = desc.charAt(0).toUpperCase() + desc.slice(1)
    descriptionDisplay.innerText = capitalize;
}

export const renderWindAndHumidity = (windSpeed, humidity) => {
    const windDisplay = document.querySelector('.display-wind');
    const humidityDisplay = document.querySelector('.display-humidity');

    windDisplay.innerText = `Wind: ${windSpeed} mph`;
    humidityDisplay.innerText = `Humidity: ${humidity}%`
}

export const renderTempSwitch = (obj) => {
    const container = document.querySelector('.temp-toggle');
    const celsiusSwitch = document.createElement('div');
    const fahrenheitSwitch = document.createElement('div');

    const switches = [celsiusSwitch, fahrenheitSwitch];

    celsiusSwitch.className = 'celsius-radio';
    fahrenheitSwitch.className = 'fahrenheit-radio';

    celsiusSwitch.dataset.toggle = 'celsius';
    fahrenheitSwitch.dataset.toggle = 'fahrenheit';

    celsiusSwitch.innerText = '°C';
    fahrenheitSwitch.innerText = '°F';

    addEventListeners(switches, obj);

    container.append(celsiusSwitch, fahrenheitSwitch);

}

function addEventListeners(toggles, obj) {
    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            toggles.forEach((toggle) => toggle.classList.remove('active'));
            toggle.classList.add('active');
            toggle.dataset.toggle === 'celsius' ? format = 'celsius' :
            format = 'fahrenheit';

            renderTemp(obj);
        });
    });
}

export const clearElements = () => {
    const container = document.querySelector('.temp-toggle');

    container.replaceChildren();
}

export const getLocationInput = () => {
    const inputField = document.getElementById('search-place').value;

    return inputField;
}


