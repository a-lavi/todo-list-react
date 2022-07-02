
import './Style.css';
import ToDoList from './ToDoList';
import Input from './Input';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function App() {
    const myTasks = [
        {
            id: 1,
            description: 'Test',
            isDone: true
        },
        {
            id: 2,
            description: 'Test2',
            isDone: false
        }
    ]
    return (
        <main>


            function App() {
    return (
            <main>

                <div className="container">
                    <h1 id="head" >To-do List</h1>

                    <input className="form-control" id="new-task" type="text" placeholder="Add a new task" />
                    <center><button type='submit' className='add'>Add</button></center>

                    <div id="tasks-body">
                        <h3 id="doing" className="text-center">My tasks</h3>
                        <ul id="todo-container">
                            <List />
                        </ul>

                    </div>
                </div>
            </main>
            );
}

            export default App;


