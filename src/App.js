import './App.css';
import Header from './component/Header';
import {useState} from 'react';
import Taskss from './component/Tasks'

function App() {
  const [tasks, setTask] = useState([
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
  return (
    <>
    <Header/>
    <Taskss tasks = {tasks}/>
    </>
  );
}

export default App;
