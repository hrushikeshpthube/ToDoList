import React, { createContext }  from "react";
import Bcomp from "./BComp";
//Parent A ->child B(Parent of C)->child C hierarchy
const Fname=createContext();
const Lname=createContext();

const Acomp=()=>{
    
   
    return(
<div>
    <Fname.Provider value={"demo"}>
        <Lname.Provider value={"Tut"}>
            <Bcomp/>
        </Lname.Provider>
    </Fname.Provider>
</div>
    )
}
export default Acomp;
export {Fname,Lname};