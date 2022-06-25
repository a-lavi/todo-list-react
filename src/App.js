
import './Style.css';
import ToDoList from './ToDoList';
import Input from './Input';
function App() {
  const myTasks = [
    {
      id:1,
      description: 'Test',
      isDone: true
    },
    {
      id:2,
      description: 'Test2',
      isDone: false
    }
  ]
  return (
    <main>

        <div className="container text-muted">
            <h2 id="head" className="display-3 text-center mb-5">To-do List</h2>
            <Input />
            <div id="-body">
                <h3 id="doing" className="text-center">My tasks</h3>
                <ul id="todo-container">
                  <ToDoList tasks={myTasks}/>
                </ul>
                <footer id='activeTodo'></footer>
            </div>
        </div>
    </main>
  );
}

export default App;
