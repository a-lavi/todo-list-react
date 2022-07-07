import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import React, { useState } from 'react';
const ToDoListItem = ({ list, index, taskList, setTaskList, setNewTask, addList, newTask, removeTask }) => {

    const [editing, setEditing]= useState(false)




    const renderName = ({ list }) => {
        console.log('test!')
        const itemStyle = {
            'text-decoration': list.completed ? 'line-through' : 'none',
            cursor: 'pointer'
        };

        if (editing) {
            console.log('i am edit')
            return (
                    <form onSubmit={onSaveClick}>
                        <input className='form-control'type="text" id='update-task' value={newTask.task} onChange={({ target }) => setNewTask(prev => ({ ...prev, task: target.value }))} />
                    </form>
             
            );
        } else {
            console.log('test2', editing)
            return (
                <>
                    <span style={itemStyle} >{list.task}</span>
                    <input type="checkbox"
                        //onClick={this.props.toggleComplete.bind(this, this.props.name)} 
                        className="checkBox" />
                    <label>sdd</label>
                </>
            );
        }
    }
    const renderButtons = ({ list, index }) => {
        if (editing) {
            return (
                <span>
                    <button onClick={onSaveClick}>Save</button>
                    <button onClick={onCancel} >Cancel</button>
                </span>
            );
        } else {

            return (
                <span>

                    <div>
                        <Button className="delete"
                            onClick={() => removeTask(index)}
                        ><CloseOutlinedIcon /></Button>
                    </div>
                    <Button onClick={() => onEditClick(list)} className="edit"><CreateOutlinedIcon /></Button>
                    <Button className="down"><ArrowDownwardOutlinedIcon /></Button>
                    <Button className="up"><ArrowUpwardOutlinedIcon /></Button>
                </span>
            );
        }

    }
    const findItem = (item) => {
        return taskList.filter((element) => element.task === item)[0];
        
    }
    const onSaveClick = () => {
        console.log(newTask.task)
        console.log(list)

        saveItem(list, newTask.task);
        setEditing(false)
    }
    const saveItem = (oldItem, newItem) => {
        let selectedItem = findItem(oldItem.task);
        selectedItem.task = newItem;
        //setTaskList(prev => ([...prev, selectedItem]));
    }
    const onEditClick = () => {
        console.log(editing)
        setEditing(true)
        renderName({ list });
        console.log('editing')
    }
    const onCancel=()=>{
        setEditing(false)
    }

    return (
        <div className="to-do-item">
            <span className="name">
                {renderName({ list })}
            </span>
            <span className="actions">
                {renderButtons({ list, index })}
            </span>
        </div>
    );


}
export default ToDoListItem