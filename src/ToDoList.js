import React from 'react'
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const ToDoList = ({ taskList, setTaskList }) => {
    const removeTask = (props) => {
        console.log(props, 'cheCK', taskList)
        setTaskList(taskList => taskList.filter((list, index) => index !== props))
    }
    const allTasks = taskList.map((list, index) => {

        return (
            <li className="todoItem" key={'mein' + index}>
                <div>{list.task}</div>
                <input type="checkbox" className="checkBox" />
                <label></label>
                <input type="text" className="form-control" />

                <Button className="delete"
                    onClick={() => removeTask(index)}
                ><CloseOutlinedIcon /></Button>
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
