import './App.css';
import Header from './component/Header';
import {useState} from 'react';
import Tasks from './component/Tasks'
import AddTaskForm from './component/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text:"community meeting",
        date: '23rd june 1:15 ',
        reminder: true

    },
    {
        id : 2,
        text:'grocarry',
        date: '12 july 10;12',
        reminder: true
    },
    {
        id: 3,
        text: 'family meeting',
        date: '16 feb 12:12',
        reminder: false
    }

])

const DeleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const addTask = (newTask) => {
  setTasks([...tasks, newTask])
}


  return (
    <>
    <Header/>
    <AddTaskForm addTask={addTask}></AddTaskForm>
    <Tasks tasks={tasks} onDelete={DeleteTask}/>
    </>
  );
}

export default App;
