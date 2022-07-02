import React from 'react'
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';



const ToDoList = ({ tasks }) => {
    const allTasks = tasks.map((task, index) => {
        return (
            <li className="todoItem" key={'mein' + task.id}>
                <div></div>
                <input type="checkbox" className="checkBox" />
                <label>{task.description}</label>
                <input type="text" className="form-control" />
                <Button className="delete"><CloseOutlinedIcon /></Button>
                <Button className="edit"><CreateOutlinedIcon /></Button>
                <Button className="down"><ArrowDownwardOutlinedIcon /></Button>
                <Button className="up"><ArrowUpwardOutlinedIcon /></Button>
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