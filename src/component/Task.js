import { FaTimes } from 'react-icons/fa';

function Task ({task, onDelete}){
    return(
        <>
        <h3>{task.text} </h3><FaTimes  onClick={() => onDelete(task.id) }/>
        <p>{task.date}</p>
        </>
    )
}

export default Task;