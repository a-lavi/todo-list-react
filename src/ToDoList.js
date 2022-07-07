import React from 'react'
import Button from '@mui/material/Button';
import ToDoListItem from './toDoListItem';

const ToDoList = ({ editing, setEditing,taskList, setTaskList,setNewTask,addList, newTask  }) => {
  const removeTask = (taskIndex) => {
    console.log(taskIndex)
    setTaskList(taskList => taskList.filter((list,index) => index !== taskIndex))
  }
    const allTasks = taskList.map((list, index) => {
     
      return (
        <li className="todoItem" key={'mein' + index}>
          <ToDoListItem 
          setEditing={setEditing} editing={editing}
          removeTask={removeTask} 
          setNewTask={setNewTask} 
          addList={addList} 
          newTask={newTask} 
          taskList={taskList}
           list={list} 
           index={index}
           setTaskList={setTaskList}/>
       {/*    <div>{list.task}</div>
      <input type="checkbox" className="checkBox" />
          <label>sdd</label>
          <input type="text" className="form-control" />
          <div>
          <Button variant="contained" className="delete"
           onClick={() => removeTask(index)} 
           ></Button>
          </div>
                <Button className="edit"><CreateOutlinedIcon /></Button>
                <Button className="down"><ArrowDownwardOutlinedIcon /></Button>
                <Button className="up"><ArrowUpwardOutlinedIcon /></Button> */}
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
