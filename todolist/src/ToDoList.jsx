import React from "react";


const ToDoList = (props) => {
    return (


        <div className="todo-item">
            <button onClick={
                () => {
                    props.onSelect(props.id)
                }
            } className="delete-btn">-</button>
            <li> {props.text}</li>
        </div>

    )
}
export default ToDoList;