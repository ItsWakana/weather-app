
export const renderTemp = ({ celsius }) => {
    const display = document.querySelector('.display');

    display.innerText = `${celsius} °C`;
}

export const getLocationInput = () => {
    const inputField = document.getElementById('search-place').value;

    return inputField;
}