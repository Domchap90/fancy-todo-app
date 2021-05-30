const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const getWeather = async() => {
    const response = await fetch(WEATHER_URL);
    const json = await response.json();

    return {
        description: json.weather[0].description,
        icon: json.weather[0].icon,
        temperature: json.main.temp
    };
}

const openWeatherMap = {
    getWeather
}

export default openWeatherMap;