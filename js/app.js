const API_KEY = 'cf880044756a4a08e0c8e6f1b07e26c2';
const searchTemperature = () => {
    const searchValue = document.getElementById('search-value').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data));
    console.log(url);
}


const setInnerText = (id , text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp );
    setInnerText('lead', temperature.weather[0].main);
    
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconImage = document.getElementById('weather-icon')  ;
    iconImage.setAttribute('src', url); 
}