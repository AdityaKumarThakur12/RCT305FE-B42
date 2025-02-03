

const Todo = ({todo, toggleTodo, deleteTodo})=>{
    return (
        <>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", borderBottom:"2px solid gray"}}>
            <h3 style={todo.completed ? {color: "green"} : {color:"black"}}>{todo.input} {todo.completed ? "✔️" : "❌" }</h3>
            <button style={{marginLeft:"60px", padding:"5px 10px", borderRadius:"10px"}} onClick={()=> toggleTodo(todo.id)}>{todo.completed ? "Undo" : "Complete"}</button>
            <button style={{marginLeft:"10px", padding:"5px 10px", borderRadius:"10px"}} onClick={()=> {deleteTodo(todo.id)}}>Delete</button>
        </div>
        </>
    )
}
export default Todo