import { useState } from "react";


const TodoInput = ({addTodo})=>{
    const [input, setInput] = useState('');
    const addTask = (e)=>{
        e.preventDefault();
        addTodo(input);
        setInput('')
    }
    return(
        <>
            <div style={{display:"flex", alignItems:"center", marginBottom:"30px"}}>
                <input style={{padding:"6px 14px", borderRadius:"10px"}} 
                type="text" placeholder="Enter the task name" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button style={{padding:"6px 13px", borderRadius:"10px", marginLeft:"5px"}} onClick={addTask}>Add</button>
            </div>
        </>
    )
}
export default TodoInput;