import { configureStore } from '@reduxjs/toolkit';
import agendaReducer from '../features/agenda/agendasSlice';
import weatherReducer from '../features/weather/weatherSlice';
import imageReducer from '../features/images/imageSlice';
import quoteReducer from '../features/quotes/quoteSlice';

export const store = configureStore({
  reducer: {
    agendas: agendaReducer,
    weather: weatherReducer,
    image:  imageReducer,
    quote: quoteReducer
  },
});
