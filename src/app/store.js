import { configureStore } from '@reduxjs/toolkit';
import agendaReducer from '../features/agenda/agendasSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    agendas: agendaReducer,
    weather: weatherReducer
  },
});
