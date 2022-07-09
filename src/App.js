import './Style.css'
import ToDoList from './ToDoList'
import Input from './Input'
import React, { useEffect, useState } from 'react'

const getLocalStorage= ()=>{
let list =localStorage.getItem("list")
if(list){
  return(list= JSON.parse(localStorage.getItem("list")))
}else {
  return[]
}
}
function App() {
    const [newTask, setNewTask] = useState({
        task: '',
        status: '',
        isEditing: false,
        completed: false,
    })

    const [taskList, setTaskList] = useState(getLocalStorage())
    const [errorMsg , setErroMsg] = useState('')

    //const [editing, setEditing]= useState(false)

    useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(taskList))
    },[taskList])
    const addList = () => {
        if (!newTask.task) {
            setErroMsg('Please enter a valid task.')
            setNewTask((prev) => ({ ...prev, task: '' }))
        } else if (
            taskList.map((element) => element.task).indexOf(newTask.task) !== -1
        ) {
            console.log('change')
            setNewTask((prev) => ({ ...prev, task: '' }))
            setErroMsg('This task already exists, please add a new one.')
        } else {
            setErroMsg('')
            setTaskList((prev) => [...prev, { ...newTask }])
            setNewTask((prev) => ({ ...prev, task: '' }))
        }
    }

    // console.log(...taskList)
    return (
        <main>
            <div className="container ">
                <h2 id="head">To-do List</h2>
                <Input
                    errorMsg={errorMsg}
                    setErroMsg={setErroMsg}
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
