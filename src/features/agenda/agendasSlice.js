import { createSlice } from '@reduxjs/toolkit';

const agendasSlice = createSlice({
    name: 'agendas',
    initialState: {agendas: {}},
    reducers: {
        addAgenda: (state, action) => {
            const { agendaId, agenda } = action.payload;
            state.agendas[agendaId] = {
                id: agendaId,
                agenda: agenda
            };
            return state;
        },
        // removeAgenda: (state, action) => {

        // }
    }
});

export const { addAgenda } = agendasSlice.actions;
export default agendasSlice.reducer;

export const selectAgendas = state => state.agendas.agendas;