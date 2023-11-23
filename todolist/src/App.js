import React, { useState } from "react";



const APP = () => {

  const InputEvent = (event) => {
    let val = event.target.value;
    return (
      setitem(val)
    )
  }

  const AddItem = () => {
    console.log("item added");
    setArray((OldItems) => {
      return [...OldItems, inputitem]
    }
    );

  }


  const [inputitem, setitem] = useState("")
  const [ItemArray, setArray] = useState([]);
  return (
    <>
      <div>
        <h1>To Do List</h1><br></br>
        <input type="text" placeholder="Add item" onChange={InputEvent} /><br></br>
        <button onClick={AddItem} >+</button>
        <ol>
          {ItemArray.map((item) => {
            return (
              <>
                <li>{item}</li>
              </>
            )
          })}

        </ol>

      </div>
    </>
  )

}
export default APP;