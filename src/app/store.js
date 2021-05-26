import { configureStore } from '@reduxjs/toolkit';
import agendaReducer from '../features/agenda/agendasSlice';

export const store = configureStore({
  reducer: {
    agendas: agendaReducer,
  },
});
