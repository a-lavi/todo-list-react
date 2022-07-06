
import './Style.css';
import ToDoList from './ToDoList';
import Input from './Input';
import React, { useState } from 'react';



function App() {
<<<<<<< Updated upstream
  
  
    const[newTask, setNewTask] = useState({task:'', status:''});
    const [taskList , setTaskList]= useState([])
    const addList = ()=>{
      setTaskList(prev =>([...prev, newTask]));
=======

  const [newTask, setNewTask] = useState({ task: '', status: '', completed:false });
  const [taskList, setTaskList] = useState([])
  const addList = () => {
    if(!newTask.task){
      console.log('hhhhhhhhh')
    }else if(taskList.map(element => element.task).indexOf(newTask.task) !== -1){
      console.log('change')
    }else{
      setTaskList(prev => ([...prev, newTask]));
>>>>>>> Stashed changes
    }
    
  }
  // console.log(...taskList)
  return (
    <main>

<<<<<<< Updated upstream
        <div className="container ">
            <h2 id="head" >To-do List</h2>
            <Input setNewTask={setNewTask} addList={addList} newTask={newTask}/>
            <div id="task-body">
                <h3 id="doing" className="text-center">My tasks</h3>
                <ul id="todo-container">
                  <ToDoList taskList={taskList} setTaskList={setTaskList}/>
                </ul>
                <footer id='activeTodo'></footer>
            </div>
        </div>
=======
      <div className="container ">
        <h2 id="head" >To-do List</h2>
        <Input setNewTask={setNewTask} addList={addList} newTask={newTask} taskList={taskList}  />
        <div id="task-body">
          <h3 id="doing" className="text-center">My tasks</h3>
          <ul id="todo-container">
            <ToDoList taskList={taskList} setTaskList={setTaskList} />
          </ul>
          <footer id='activeTodo'></footer>
        </div>
      </div>
>>>>>>> Stashed changes
    </main>
  );
}

export default App;
