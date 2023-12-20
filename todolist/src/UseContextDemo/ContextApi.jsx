import React,{useContext} from "react";
import { Fname,Lname } from "./Acomp";
const ContextApi=()=>{
    const fname=useContext(Fname);
    const lname=useContext(Lname);

return(
<div>
    <h1>This is ContextAPI component</h1>
   <h2>First Name={fname}</h2>
   <h2>Last Name={lname}</h2>
</div>
)
}
export default ContextApi;