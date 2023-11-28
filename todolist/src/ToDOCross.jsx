import React, { useState } from "react";
import ListCrossDisp from "./ListCrossDisp";

const ToDOCross = () => {
    const [inp, setInp] = useState("");
    const [inparr, setArrInp] = useState([]);


    const InputCross = (event) => {
        // console.log(event.target.value);
        setInp(event.target.value);
    }


    const AddInpCross = () => {
        console.log("clicked");
        setArrInp((Prev) => {
            return [...Prev, inp]
        })


    }


    return (

        <div>
            <h1>TO DO Cross List</h1>
            <input type="text" placeholder="Add a item" onChange={InputCross} ></input>
            <button onClick={AddInpCross}>+</button>
            <ol>
                {inparr.map((item, index) => {

                    return (

                        <ListCrossDisp key={index} text={item} />


                    )
                }
                )
                }
            </ol>


        </div>
    )

}
export default ToDOCross;