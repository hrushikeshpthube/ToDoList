import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ToDoList = (props) => {
    return (


        <div className="todo-item">
            <button onClick={
                () => {
                    props.onSelect(props.id)
                }
            } className="delete-btn"><DeleteForeverIcon /></button>
            <li> {props.text}</li>
        </div>

    )
}
export default ToDoList;