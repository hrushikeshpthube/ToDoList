import React, { useState } from "react";
const IncToDO = () => {

    const [num, setNum] = useState(0)
    const IncreNum = () => {
        return (
            setNum((num) => { return num + 1 })
        )
    }
    const DecreNum = () => {

        if (num == 0) {

            alert("Cannot decrement below 0")
        }
        else {

            return (setNum((num) => { return num - 1 }))
        }

    }
    return (
        <div className="main-Div">
            <h1>Increment Decrement Demo Tab </h1>
            <h1 >Output= {num}</h1>
            <button onClick={IncreNum}>Increment</button>
            <button onClick={DecreNum}>Decrement</button>

        </div>
    )
}
export default IncToDO;