import Button from '@mui/material/Button'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import React, { useState } from 'react'
import Popup from './Popup'
const ToDoListItem = ({
    list,
    index,
    taskList,
    setTaskList,
    setNewTask,
    addList,
    newTask,
    removeTask,
    id,
}) => {
    const [editing, setEditing] = useState(false)
    const [updateTask, setUpdateTask] = useState([])
    const [toggle, setToggle] = useState(false)
    const [popup, setPopup] = useState(false)

    const toggleComplete = () => {
        setToggle(!toggle)
    }
    const renderName = ({ list }) => {
        console.log('test!')
        const itemStyle = {
            'text-decoration': toggle ? 'line-through' : 'none',
            cursor: 'pointer',
        }

        if (editing) {
            console.log('i am edit')
            return (
                <form onSubmit={onSaveClick}>
                    <input
                        className="form-control"
                        type="text"
                        id="update-task"
                        value={updateTask.task}
                        onChange={({ target }) =>
                            setUpdateTask((prev) => ({
                                ...prev,
                                task: target.value,
                            }))
                        }
                    />
                </form>
            )
        } else {
            if(popup){
console.log('deleeeeeteee')
return(
    <>
    <Popup index={index} removeTask={removeTask} popup={popup} setPopup={setPopup}/>
    </>
)
            }else{
            console.log('test2', editing)
            return (
                <>
                    <span style={itemStyle} onClick={toggleComplete}>
                        {list.task}
                    </span>
                </>
            )
        }
        }
    }
    const renderButtons = ({ list, index }) => {
        if (editing) {
            return (
                <span>
                    <button onClick={onSaveClick}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </span>
            )
        } else {
            if(popup){
                return
            }else{
            return (
                <span>
                    <div>
                        <Button
                            className="delete"
                            onClick={() => handleDelete()}>
                            <CloseOutlinedIcon />
                        </Button>
                    </div>
                    <Button onClick={() => onEditClick(list)} className="edit">
                        <CreateOutlinedIcon />
                    </Button>
                    <Button className="down">
                        <ArrowDownwardOutlinedIcon />
                    </Button>
                    <Button className="up">
                        <ArrowUpwardOutlinedIcon />
                    </Button>
                </span>
            )
            }
        }
    }

    // This shows the Confirmation Box

    const handleDelete = () => {
        setPopup(true)
    }

    // This performs the deletion and hide the Confirmation Box

    

    const findItem = (item) => {
        return taskList.filter((element) => element.task === item)[0]
    }
    const onSaveClick = () => {
        saveItem(list, updateTask.task)
        setEditing(false)
    }
    const saveItem = (oldItem, newItem) => {
        let selectedItem = findItem(oldItem.task)
        selectedItem.task = newItem
        //setTaskList(prev => ([...prev, selectedItem]));
    }
    const onEditClick = () => {
        setEditing(true)
       // renderName({ list })//
    }
    const onCancel = () => {
        setEditing(false)
    }

    return (
        <div className="to-do-item">
            <span className="name">{renderName({ list })}</span>
            <span className="actions">{renderButtons({ list, index })}</span>
        </div>
    )
}
export default ToDoListItem
