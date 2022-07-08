

function Input({ setNewTask, addList, newTask }) {
    
    return (
        <div>
            <input
                value={newTask.task}
                className="form-control"
                id="new-task"
                type="text"
                placeholder="Add a new task"
                onChange={({ target }) => setNewTask(prev => ({ ...prev, task: target.value }))}
            />
            <center>
                <button
                 onClick={addList}
                  type='submit'
                   className='add'
                   >
                    Add
                   </button>
                  
                </center>
                
        </div>
    )

}
export default Input