import Button from '@mui/material/Button'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import React, { useState } from 'react'
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
    const [popup, setPopup] = useState({
        show: false, // initial values set to false and null
        id: null,
    })

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
    const renderButtons = ({ list, index }) => {
        if (editing) {
            return (
                <span>
                    <button onClick={onSaveClick}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </span>
            )
        } else {
            return (
                <span>
                    <div>
                        <Button
                            className="delete"
                            onClick={() => handleDelete(id)}>
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

    // This shows the Confirmation Box

    const handleDelete = (id) => {
        setPopup({
            show: true,
            id,
        })
    }

    // This performs the deletion and hide the Confirmation Box

    const handleDeleteTrue = () => {
        if (popup.show && popup.id) {
            let filteredData = updateTask.filter((todo) => todo.id !== popup.id)
            setUpdateTask(filteredData)
            setPopup({
                show: false,
                id: null,
            })
        }
    }

    // This hides the Confirmation Box when user clicks "No"/"Cancel"

    const handleDeleteFalse = () => {
        setPopup({
            show: false,
            id: null,
        })
    }

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
        renderName({ list })
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
