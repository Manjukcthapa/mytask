import Button from './Button';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = ({ addTask }) => { 
    const [mytask, setMyTask] = useState("manju")
    const addNewTask = (e) => {
        e.preventDefault();
        addTask({
            id: uuidv4(),
            text: mytask,
            reminder: false,
            date: 'Mon 6th'
        })
    }
    
    return (
     <form>
      <input 
        name=" id" 
        type="text" 
        onChange={(e) => setMyTask(e.target.value)}
        value={mytask} />
      <Button onClick={(e) => addNewTask(e)} text='ADD'/>
     </form>
    );
   
 }

export default AddTaskForm;