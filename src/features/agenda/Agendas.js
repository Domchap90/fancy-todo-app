import { selectAgendas } from './agendasSlice';
import { useSelector } from 'react-redux';

export function Agendas() {
    const agendas = useSelector(selectAgendas);
    console.log(`agendas is ${agendas}`)
    const agendasList = Object.values(agendas).map((a) => {
        return(
            <div className="agendaBox" >
                <p key={a.id}>{a.agenda}</p>
            </div>
        )
    });  
    console.log(`agendasList ${agendasList} is of type ${typeof(agendasList)}`)

    return (
        <div className="agendaContainer">{agendasList}</div>
    );
          
}