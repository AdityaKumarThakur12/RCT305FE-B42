import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/TodoApp/actions"

export const Form = ({editFormVisibility})=>{
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        if(value!==""){
        e.preventDefault;
        let date = new Date();
        let time = date.getTime()
        let TodoObj={
            id: time,
            todo: value,
            completed: false,
        }
        setValue('')
        dispatch(addTodo(TodoObj))
        }
    }
    return(
        <>
            
                <div>
                    <label>Add your Todo List</label>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                        <input style={{width:"70%", padding:"10px 5px", fontSize:"15px"}} type="text" placeholder="Enter the task" value={value} onChange={(e)=>setValue(e.target.value)} required/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
        </>
        
    )
}