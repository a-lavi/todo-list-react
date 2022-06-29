import React from 'react'

const List = () => {
    return (
        <li className="todoItem">
            <input type="checkbox" class="checkBox" />
            <label>TEST TASK</label>
            <input type="text" class="form-control" />
            <button className="delete"></button>
            <button className="edit"></button>
            <button className="down"></button>
            <button className="up"></button>
        </li>
    )
}

export default List