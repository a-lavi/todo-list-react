
import './Style.css';
import List from './List';


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


