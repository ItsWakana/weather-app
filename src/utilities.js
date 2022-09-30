export const convertToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
}

export const convertToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return fahrenheit;
}