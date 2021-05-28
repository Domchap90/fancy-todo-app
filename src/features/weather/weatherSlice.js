import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import openWeatherMap from '../../api/weatherAPI';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async() => {
        const response = await openWeatherMap.getWeather();
        console.log('weather is ', response)
        return response;
    });

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchWeather.fulfilled]: (state, action) => {
            state.weather = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },

    }
});

export const selectWeather = state => state.weather.weather;
export const selectWeatherLoading = state => state.weather.isLoading;

export default weatherSlice.reducer;
