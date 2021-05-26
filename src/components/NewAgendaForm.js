import { useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { addAgenda } from '../features/agenda/agendasSlice';

export function NewAgendaForm() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let errMsg = document.getElementById('err');
        errMsg.innerHTML = "";
        if (task.length > 0) {
            dispatch(addAgenda({agendaId: uuidv4(), agenda: task}));
            setTask('');
        } else
            errMsg.innerHTML = "Cannot add an empty task to the agenda.";
        
    }

    return (
        <>
            <h1>What's on your agenda?</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="add a task here" 
                    onChange={(e) => setTask(e.target.value)}
                    value={task} 
                />
                <button type="submit">Add to agenda</button>
            </form>
            
            <div>
                <p id="err"></p>
            </div>

        </>
    );
}