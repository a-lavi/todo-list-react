

function Input({ errorMsg,  setErroMsg,setNewTask, addList, newTask, placeHolder }) {

    return (
        <div>
            <input
                style={{placeholderTextColor:"red"}}
                value={newTask.task}
                className="form-control"
                id="new-task"
                type="text"
                placeholder="Add a new Task!!!"
                onFocus={()=>{setErroMsg()}}
                onChange={({ target }) => setNewTask(prev => ({ ...prev, task: target.value }))}
            />
            <center>
            <div>{errorMsg}</div>
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