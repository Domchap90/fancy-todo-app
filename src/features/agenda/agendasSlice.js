import { createSlice } from '@reduxjs/toolkit';

const agendasSlice = createSlice({
    name: 'agendas',
    initialState: {agendas: {}},
    reducers: {
        addAgenda: (state, action) => {
            const { agendaId, agenda } = action.payload;
            state.agendas[agendaId] = {
                id: agendaId,
                agenda: agenda,
                completed: false
            };
            return state;
        },
        removeAgenda: (state, action) => {
            delete state.agendas[action.payload];
        },
        toggleCompleteAgenda: (state, action) => {
            const { agendaId, completed } = action.payload;
            state.agendas[agendaId].completed = !completed;
        }
    }
});

export const { addAgenda, removeAgenda, toggleCompleteAgenda } = agendasSlice.actions;
export default agendasSlice.reducer;

export const selectAgendas = state => state.agendas.agendas;