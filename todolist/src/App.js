import React, { useState } from "react";
import ToDoList from "./ToDoList";



const APP = () => {

  const InputEvent = (event) => {
    let val = event.target.value;
    return (
      setItem(val)
    )
  }

  const AddItem = () => {
    if (inputitem.length === 0) {
      alert("Cannot add empty item.Please add item  with description text");

    }
    else {

      console.log("item added");
      setArray((OldItems) => {
        return [...OldItems, inputitem]

      }
      );
      setItem("");
      //whenevr item is added then clear inout field
    }
  }

  const DeleteItem = (id) => {
    console.log("item Deleted");
    setArray((OldArray) => {
      return OldArray.filter((arrElem, index) => {
        return index !== id
      });
    });
    //ItemArray.filter()
  }


  const [inputitem, setItem] = useState("")
  const [ItemArray, setArray] = useState([]);
  return (
    <>
      <div className="main-Div">
        <h1 >To Do List</h1><br></br>
        <input type="text" placeholder="Add item" value={inputitem} onChange={InputEvent} /><br></br>
        <button onClick={AddItem} >+</button>
        <h2>List of items as Below</h2>
        <ol>
          {ItemArray.map((item, index) => {

            return (
              <ToDoList text={item} key={index} id={index} onSelect={DeleteItem} />
            )
          })}

        </ol>

      </div>
    </>
  )

}
export default APP;