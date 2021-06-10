import { useDispatch } from 'react-redux';
import { removeAgenda, toggleCompleteAgenda } from './agendasSlice';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';

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
            <div class="btnContainer" >
                <Button variant="contained" onClick={handleDoneClick} color="primary" className="agendaButton doneBtn" >Done</Button>
                <Button variant="contained" onClick={handleCloseClick} color="secondary" className="agendaButton closeBtn" >x</Button>
            </div>
            <p key={id} id={id} >{agenda}</p>
        </div>
    );
}