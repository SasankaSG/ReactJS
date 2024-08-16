import { Header } from './components/Header.js';
import { AddTask } from './components/AddTask.js';
import { ShowTask } from './components/ShowTask.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []); //empty array/list
  const [task, setTask] = useState({}); //empty object

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task} 
        setTask={setTask} />
      <ShowTask       
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task} 
        setTask={setTask} /> 
    </div>
  );
}

export default App;
