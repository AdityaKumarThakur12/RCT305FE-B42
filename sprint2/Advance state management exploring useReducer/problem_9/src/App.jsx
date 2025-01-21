import { useState } from 'react'
import { Form } from './page/form'
import { Todos } from './page/todos'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll } from './redux/TodoApp/actions'


function App() {
  let dispatch = useDispatch();
  const todos = useSelector((state)=>state.Reducer)

  return (
    <div>
      <h1>Welcome to Todo APP</h1>
      <Form/>
      <Todos/>
      {todos.length>0&&(
        <button onClick={()=> dispatch(deleteAll())} style={{width:"100%", backgroundColor:"red", color:"white"}}>Delete All</button>
      )}
    </div>
  )
}

export default App
