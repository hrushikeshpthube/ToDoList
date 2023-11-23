import React, { useState } from "react";



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


  const [inputitem, setItem] = useState("")
  const [ItemArray, setArray] = useState([]);
  return (
    <>
      <div>
        <h1>To Do List</h1><br></br>
        <input type="text" placeholder="Add item" value={inputitem} onChange={InputEvent} /><br></br>
        <button onClick={AddItem} >+</button>
        <ol>
          {ItemArray.map((item, index) => {

            return (
              <>
                <li>{index} {item}</li>
              </>
            )
          })}

        </ol>

      </div>
    </>
  )

}
export default APP;