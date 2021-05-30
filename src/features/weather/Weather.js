import { fetchWeather, selectWeather } from './weatherSlice';
import { weatherStyle } from './weatherStyle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function Weather() {
    const weather = useSelector(selectWeather);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, []);

    const icon = "http://openweathermap.org/img/w/"+weather.icon+".png";
    
    return (
        <div className="overlayContent" id="weatherContainer" style={weatherStyle} >
            <div><img id="weatherIcon" src={icon} alt="weather icon" /></div>
            <div>{weather.temperature}&#8451;</div>
            <div>{weather.description}</div>
            
        </div>
    );
};