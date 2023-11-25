import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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
            <button onClick={IncreNum}><AddIcon /></button>
            <button onClick={DecreNum}><RemoveIcon /></button>

        </div>
    )
}
export default IncToDO;