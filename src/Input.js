

function Input({ placeholder, setPlaceHolder, setNewTask, addList, newTask, placeHolder }) {

    return (
        <div>
            <input
                style={{placeholderTextColor:"red"}}
                value={newTask.task}
                className="form-control"
                id="new-task"
                type="text"
                placeholder={placeholder}
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