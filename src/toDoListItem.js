import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
const ToDoListItem = ({ list, index, taskList, setTaskList, setNewTask, addList, newTask, removeTask }) => {
   let editing = false;
    const findItem = (item) => {
        return taskList.filter((element) => element.task === item)[0];
    }
    const saveItem = (oldItem, newItem) => {
        let selectedItem = findItem(oldItem);
        selectedItem.task = newItem;
        setTaskList(prev => ([...prev, selectedItem]));
    }
    const onSaveClick = (target) => {

        saveItem(list.task, target.value);
         editing= false;
    }
    
    const renderName = ({ list }) => {
        console.log('test!')
        const itemStyle = {
            'text-decoration': list.completed ? 'line-through' : 'none',
            cursor: 'pointer'
        };

        if (editing) {
            console.log('i am edit')
            return (
                <>
                <div>heeeey</div>
                <form onSubmit={onSaveClick}>
                    <input type="text"  defaultValue={list.task} />
                </form>
                </>
            );
        } else {
            console.log('test2', editing)
            return (
                <>
                    <span style={itemStyle} >{list.task}</span>
                    <input type="checkbox"
                        //onClick={this.props.toggleComplete.bind(this, this.props.name)} 
                        className="checkBox" />
                    <label>sdd</label>
                </>
            );
        }
    }
    const renderButtons = ({list,index}) => {
        if (editing ) {
            return (
                <span>
                    <button onClick={onSaveClick}>Save</button>
                    <button >Cancel</button>
                </span>
            );
        } else {

            return (
                <span>

                    <div>
                        <Button className="delete"
                            onClick={() => removeTask(index)}
                        ><CloseOutlinedIcon /></Button>
                    </div>
                    <Button onClick={()=>onEditClick(list)} className="edit"><CreateOutlinedIcon /></Button>
                    <Button className="down"><ArrowDownwardOutlinedIcon /></Button>
                    <Button className="up"><ArrowUpwardOutlinedIcon /></Button>
                </span>
            );
        }

    }
    const  onEditClick=()=> {
        console.log(editing)
            editing = true ;
            renderName({ list });
            console.log('editing')
          }
    
    return (
        <div className="to-do-item">
            <span className="name">
                {renderName({ list })}
            </span>
            <span className="actions">
                {renderButtons({list,index})}
            </span>
        </div>
    );


}
export default ToDoListItem