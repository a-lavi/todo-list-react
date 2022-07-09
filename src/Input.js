import './Style.css'
function Input({
    errorMsg,
    setErroMsg,
    setNewTask,
    addList,
    newTask,
    placeHolder,
}) {
    return (
        <div>
            <input
                style={{ placeholderTextColor: 'red' }}
                value={newTask.task}
                className="form-control"
                id="new-task"
                type="text"
                placeholder="Add a new task here"
                onFocus={() => {
                    setErroMsg()
                }}
                onChange={({ target }) =>
                    setNewTask((prev) => ({ ...prev, task: target.value }))
                }
            />
            <center>
                <div style={{ color: 'red' }}>{errorMsg}</div>
                <br />
                <button onClick={addList} type="submit" className="add">
                    Add
                </button>
            </center>
        </div>
    )
}
export default Input
