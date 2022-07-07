
import './Style.css';
import ToDoList from './ToDoList';
import Input from './Input';
import React, { useState } from 'react';



function App() {

  const [newTask, setNewTask] = useState({ task: '', status: '',isEditing:false, completed:false });
  const [taskList, setTaskList] = useState([])
  //const [editing, setEditing]= useState(false)

  const addList = () => {
    if(!newTask.task){
      console.log('hhhhhhhhh')
    }else if(taskList.map(element => element.task).indexOf(newTask.task) !== -1){
      console.log('change')
    }else{
      setTaskList(prev => ([...prev, newTask]));
      
    }
    
  }
 
  // console.log(...taskList)
  return (
    <main>

      <div className="container ">
        <h2 id="head" >To-do List</h2>
        <Input setNewTask={setNewTask} addList={addList} newTask={newTask} taskList={taskList}  />
        <div id="task-body">
          <h3 id="doing" className="text-center">My tasks</h3>
          <ul id="todo-container">
            <ToDoList  taskList={taskList} setTaskList={setTaskList} setNewTask={setNewTask} addList={addList} newTask={newTask} />
          </ul>
          <footer id='activeTodo'></footer>
        </div>
      </div>
    </main>
  );
  
}

export default App;
