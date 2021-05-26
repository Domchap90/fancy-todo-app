import { useDispatch } from 'react-redux';
import { removeAgenda, toggleCompleteAgenda } from './agendasSlice';
import { useEffect } from 'react';

export function Agenda(props) {
    const dispatch = useDispatch();
    const { id, agenda, completed } = props;

    const handleDoneClick = () => {
        dispatch(toggleCompleteAgenda({agendaId: id, completed: completed}));
    };

    const handleCloseClick = () => {
        dispatch(removeAgenda(id));
    };

    const isComplete = () => {
        document.getElementById(id).style.textDecoration = (completed)? 'line-through': 'none';
    };

    useEffect(isComplete, [id, completed]);

    return(
        <div className="agendaBox" >
            <button onClick={handleDoneClick} >Done</button>
            <button onClick={handleCloseClick} >x</button>
            <p key={id} id={id} >{agenda}</p>
        </div>
    );
}