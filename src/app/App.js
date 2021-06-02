import React from 'react';
import { NewAgendaForm } from '../components/NewAgendaForm';
import { Agendas } from '../features/agenda/Agendas';
import { Weather } from '../features/weather/Weather';
import { Images } from '../features/images/Images';

import '../App.css';
import { Grid, Hidden } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Images />
        <div className="overlay">
          <Grid container spacing={3} >
            <Grid container item xs={12} md={9} direction="column" >
              <NewAgendaForm />
            </Grid>
            <Hidden smDown>
              <Grid container item md={3} justify="flex-end" >
                <Weather />
              </Grid>
            </Hidden>
          </Grid>
          <Agendas />
        </div> 
  
      </header>
    </div>
  );
}

export default App;
