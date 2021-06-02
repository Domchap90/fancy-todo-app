import { selectAgendas } from './agendasSlice';
import { useSelector } from 'react-redux';
import { Agenda } from './Agenda';


export function Agendas() {
    const agendas = useSelector(selectAgendas);    
    
    const agendasList = Object.values(agendas).map((a) => {
        console.log(`id  = ${a.id}, agenda = ${a.agenda}`)
        return <Agenda id={a.id} agenda={a.agenda} completed={a.completed} key={a.id} />;
    });  

    return (
        <div className="agendaContainer" > {agendasList}</div>
    );
          
}