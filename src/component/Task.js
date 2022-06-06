import {FaTimes} from 'react-icons/fa'
function Task ({task}){

    return(
        <>
        <h3>{task.text} <FaTimes/></h3>
    <p>{task.date}</p>
        </>
    )
}

export default Task;