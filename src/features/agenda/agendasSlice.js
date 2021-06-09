import { createSlice } from '@reduxjs/toolkit';

const agendasSlice = createSlice({
    name: 'agendas',
    initialState: {
        agendas: [],
        displayedAgendas: [],
        activePage: 1,
        perPage: 3,
    },
    reducers: {
        addAgenda: (state, action) => {
            const { agendaId, agenda } = action.payload;
            state.agendas.push({
                id: agendaId,
                agenda: agenda,
                completed: false
            });
            return state;
        },
        removeAgenda: (state, action) => {
            for (let a of state.agendas) {
                if (a.id === action.payload) {
                    let ind =state.agendas.indexOf(a);
                    state.agendas.splice(ind, ind + 1);
                }
            }
            
        },
        toggleCompleteAgenda: (state, action) => {
            const { agendaId, completed } = action.payload;
            for (let a of state.agendas) {
                if (a.id === agendaId)
                    a.completed = !completed;
            }
            // state.agendas[agendaId].completed = !completed;
        },
        changePage: (state, action) => {
            const { selectedPage, perPage } = action.payload;
            const offset = (selectedPage-1) * perPage;
            state.displayedAgendas = Object.values(state.agendas).slice(offset, offset + perPage);
            return state;
        }
    }
});

export const { addAgenda, removeAgenda, toggleCompleteAgenda, changePage } = agendasSlice.actions;
export default agendasSlice.reducer;

export const selectAgendas = state => state.agendas.agendas;
export const selectDisplayedAgendas = state => state.agendas.displayedAgendas;