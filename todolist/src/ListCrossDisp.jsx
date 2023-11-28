import React, { useState } from "react";


const ListCrossDisp = (Props) => {
    const [line, setLine] = useState(false);
    const DeleteItem = () => {

        console.log("Item Deleted");
        //Below commented is to delete element
        //     setArrInp((PrevArr) => {
        //         return (
        //             PrevArr.filter((arrelement, index) => {
        //                 return index !== id;

        //             })
        //         )
        //     })



        setLine(true);
    };


    return (
        <div>

            <button onClick={DeleteItem}>-</button>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{Props.text}</li>
        </div>
    )

}

export default ListCrossDisp;