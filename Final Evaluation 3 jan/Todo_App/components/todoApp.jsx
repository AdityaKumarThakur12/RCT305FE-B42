import { useState } from "react";
import TodoInput from "./todoInput";
import Todo from "./todo";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (input) => {
        if (input) {
            setTodos([...todos, { id: Date.now(), input, completed: false }])
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        )
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    return (
        <>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", flexDirection:"column", width:"30%" ,margin:"auto", padding:"10px", borderRadius:"20px"}}>
                <h1>Todo Application </h1>
                <TodoInput addTodo={addTodo} />
                
                <div>
                    {todos.length>0 ? (
                        todos.map(todo => (
                            <Todo key={todo.id}
                              todo={todo}
                              toggleTodo={toggleTodo}
                              deleteTodo={deleteTodo}
                            />
                        ))
                    ): 
                      <p>No task here</p>
                    }
                </div>
            </div>
        </>
    )
}
export default TodoApp