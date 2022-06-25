
import './Style.css';
import List from './List';

function App() {
  return (
    <main>

        <div class="container text-muted">
            <h2 id="head" class="display-3 text-center mb-5">To-do List</h2>
            
            <input class="form-control" id="new-task" type="text" placeholder="Add a new task" />
            
            <div id="tasks-body">
                <h3 id="doing" class="text-center">My tasks</h3>
                <ul id="todo-container">
                  <List />
                </ul>
                <footer id='activeTodo'></footer>
            </div>
        </div>
    </main>
  );
}

export default App;
