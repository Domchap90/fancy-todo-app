const URL = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;

export const getWeather = async() => {
    console.log("get weather entered")
    const response = await fetch(URL);
    console.log("after response entered", response)
    const json = await response.json();
    console.log("json = ", json)
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