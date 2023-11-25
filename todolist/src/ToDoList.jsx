import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';


const ToDoList = (props) => {
    return (


        <div className="todo-item">
            <button onClick={
                () => {
                    props.onSelect(props.id)
                }
            } className="delete-btn"><Tooltip title="Delete"><DeleteForeverIcon /></Tooltip></button>
            <li> {props.text}</li>
        </div>

    )
}
export default ToDoList;