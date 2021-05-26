import { useDispatch } from 'react-redux';
import { removeAgenda } from './agendasSlice';

export function Agenda(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeAgenda(props.id));
    }

    return(
        <div className="agendaBox" >
            <button onClick={handleClick} >x</button>
            <p key={props.id}>{props.agenda}</p>
        </div>
    )
}