import React from 'react';
import { NewAgendaForm } from '../components/NewAgendaForm';
import { Agendas } from '../features/agenda/Agendas';
import { Weather } from '../features/weather/Weather';

import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <NewAgendaForm />
        <Agendas />
  
      </header>
    </div>
  );
}

export default App;
