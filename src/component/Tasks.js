import Task from './Task'

function Tasks ({tasks}) {
    
    return(
        <>
        {tasks.map((task) => (
            <Task task={task}/>
            //<h1 key={task.id}>{task.text}</h1>
        ))

        }
         
        </>
    );

}

export default Tasks;