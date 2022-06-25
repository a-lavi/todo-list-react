import React from 'react'

const ToDoList = ({ tasks }) => {
  const allTasks = tasks.map((task, index) => {
    return (
      <li className="todoItem" key = {'mein'+task.id}>
        <div></div>
        <input type="checkbox" className="checkBox" />
        <label>{task.description}</label>
        <input type="text" className="form-control" />
        <button className="delete"></button>
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