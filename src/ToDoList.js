import React from 'react'
import Button from '@mui/material/Button';
<<<<<<< Updated upstream
const ToDoList = ({ taskList, setTaskList  }) => {
  const removeTask = (props) => {
    console.log(props,'cheCK', taskList)
    setTaskList(taskList => taskList.filter((list,index) => index !== props))
=======
import ToDoListItem from './toDoListItem';

const ToDoList = ({ taskList, setTaskList,setNewTask,addList, newTask  }) => {
  const removeTask = (taskIndex) => {
    console.log(taskIndex)
    setTaskList(taskList => taskList.filter((list,index) => index !== taskIndex))
>>>>>>> Stashed changes
  }
    const allTasks = taskList.map((list, index) => {
     
      return (
        <li className="todoItem" key={'mein' + index}>
          <ToDoListItem 
          removeTask={removeTask} 
          setNewTask={setNewTask} 
          addList={addList} 
          newTask={newTask} 
          taskList={taskList}
           list={list} 
           index={index}/>
       {/*    <div>{list.task}</div>
      <input type="checkbox" className="checkBox" />
          <label>sdd</label>
          <input type="text" className="form-control" />
          <div>
          <Button variant="contained" className="delete"
           onClick={() => removeTask(index)} 
           ></Button>
          </div>
<<<<<<< Updated upstream
          <button className="edit"></button>
          <button className="down"></button>
          <button className="up"></button>
=======
                <Button className="edit"><CreateOutlinedIcon /></Button>
                <Button className="down"><ArrowDownwardOutlinedIcon /></Button>
                <Button className="up"><ArrowUpwardOutlinedIcon /></Button> */}
>>>>>>> Stashed changes
        </li>
      )

    })
    return (
      <>
        {allTasks}
      </>
    )
  }

  export default ToDoList
