import React from 'react'
import Button from '@mui/material/Button';
const ToDoList = ({ taskList, setTaskList  }) => {
  
    const allTasks = taskList.map((list, index) => {
      const removeTask = (props) => {
        setTaskList(prev => prev.filter((index) => index !== props))
      }
      return (
        <li className="todoItem" key={'mein' + index}>
          <div>{list.task}</div>
          <input type="checkbox" className="checkBox" />
          <label></label>
          <input type="text" className="form-control" />
          <div>
          <Button variant="contained" className="delete"
           onClick={() => removeTask(index)} key={index} 
           >{list}</Button>
          </div>
          <button className="edit"></button>
          <button className="down"></button>
          <button className="up"></button>
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