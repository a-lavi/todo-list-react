import './Style.css'
import ToDoList from './ToDoList'
import Input from './Input'
import React, { useState } from 'react'

function App() {
  let placeHolder = 'Add a new Task!!'
    const [newTask, setNewTask] = useState({
        task: '',
        status: '',
        isEditing: false,
        completed: false,
    })
    const [taskList, setTaskList] = useState([])
    const [placeholder , setPlaceHolder] = useState('Add a new Task!!!')
    //const [editing, setEditing]= useState(false)

    const addList = () => {
        if (!newTask.task) {
          
          setPlaceHolder('Please enter a valid Task!!!')
        } else if (
            taskList.map((element) => element.task).indexOf(newTask.task) !== -1
        ) {
            console.log('change')
            setNewTask((prev)=>({...prev, task:''}))
            setPlaceHolder('There is already a task with this name!!!')
        } else {
          
            setTaskList((prev) => [...prev, {...newTask}])
            setNewTask((prev)=>({...prev, task:''}))
        }
       
    }

    // console.log(...taskList)
    return (
        <main>
            <div className="container ">
                <h2 id="head">To-do List</h2>
                <Input
                placeholder={placeholder}
                setPlaceHolder={setPlaceHolder}
                    setNewTask={setNewTask}
                    addList={addList}
                    newTask={newTask}
                    taskList={taskList}
                />
                <div id="task-body">
                    <h3 id="doing" className="text-center">
                        My tasks
                    </h3>
                    <ul id="todo-container">
                        <ToDoList
                            taskList={taskList}
                            setTaskList={setTaskList}
                            setNewTask={setNewTask}
                            addList={addList}
                            newTask={newTask}
                        />
                    </ul>
                </div>
            </div>
        </main>
    )
}
export default App
