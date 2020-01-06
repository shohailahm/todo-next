import React,{ useState } from 'react';


const Input=({onChange,submit})=>{
    const [inputVal,setVal]=useState("");

    function change(e){
       setVal(e.target.value);
       onChange(e.target.value);
    }

    return(
        <React.Fragment>
            <label htmlFor="todo">
            Enter Todo : 
            <input name="todo" onChange={change} value={inputVal}/>
             <button onClick={submit}>Save</button>
            </label>
        </React.Fragment>
    )
    
}


export default Input;