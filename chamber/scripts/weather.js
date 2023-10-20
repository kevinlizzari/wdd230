async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Milano&units=metric&appid=2abe799f052664beedcfb86ceeb26619');
    const data = await response.json();
    return data;
}

async function getForecast() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Milano&units=metric&appid=2abe799f052664beedcfb86ceeb26619');
    const data = await response.json();
    return data;
}

function updateWeatherSection(weatherData, forecastData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;

    document.querySelector('.weather').innerHTML = `
        <h2>Weather</h2>
        <p>Current temperature: ${weatherData.main.temp}°C</p>
        <p>Current weather: ${desc}</p>
        <img src="${iconsrc}" alt="${desc}" >
        <h3>Three day forecast:</h3>
        <p>Day 1: ${forecastData.list[0].main.temp}°C</p>
        <p>Day 2: ${forecastData.list[8].main.temp}°C</p>
        <p>Day 3: ${forecastData.list[16].main.temp}°C</p>
    `;
}

window.addEventListener('load', async function() {
    const weatherData = await getWeather();
    const forecastData = await getForecast();
    updateWeatherSection(weatherData, forecastData);
});