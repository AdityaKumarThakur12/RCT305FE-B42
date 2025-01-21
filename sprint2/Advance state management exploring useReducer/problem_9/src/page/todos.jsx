import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeTodo } from "../redux/TodoApp/actions";
import { handleCheckbox } from "../redux/TodoApp/actions";
export const Todos = ()=>{
    let dispatch = useDispatch();
    const todos = useSelector((state)=> state.Reducer)
    return todos.map((todo)=>(
        <div key={todo.id}>

            <div style={{display: "flex", alignItems:"center" , width:"100%", justifyContent: "space-around"}}>
                
                <input type="checkbox"  checked={todo.completed} onChange={()=>dispatch(handleCheckbox(todo.id))} />
                
                <p style={todo.completed ? {textDecoration:"line-through"} : {textDecoration:"none"}}>{todo.todo}</p>
                
                    <>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete 🗑️</button>
                    </>
                
                
            </div>
        </div>
    ))
}