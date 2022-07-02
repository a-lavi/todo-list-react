import React from 'react'
import Button from '@mui/material/Button';
const ToDoList = ({ tasks }) => {
  const allTasks = tasks.map((task, index) => {
    return (
      <li className="todoItem" key = {'mein'+task.id}>
        <div></div>
        <input type="checkbox" className="checkBox" />
        <label>{task.description}</label>
        <input type="text" className="form-control" />
        <Button variant="contained" className="delete"></Button>
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