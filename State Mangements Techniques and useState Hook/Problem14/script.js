function App(){
    const [tasks, setTasks] = React.useState([]);
    const [taskName, setTaskName] = React.useState('')

    function addTask(){
        if(taskName.trim()){
            setTasks([...tasks, {name: taskName, completed:false}]);
            
        }
        setTaskName('');
            
    }
    function handleToggle(indx){
        const updatedTasks = tasks.map((task,i)=>
            i==indx ? {...task , completed: !task.completed } : task
        );
        setTasks(updatedTasks) 
    }
    function deleteTask(indx){
        const updatedtasks = tasks.filter((_,i)=> i!== indx);
        setTasks(updatedtasks)
    }
    return(
        <div className="container">
            <h1>To-Do List</h1>
            <input value={taskName} placeholder="Enter the task" onChange={(e)=> setTaskName(e.target.value)}/>
            <button onClick={addTask}>Add Task</button>
            <div>
                <h2>Tasks</h2>
                {tasks.map((ele,i)=>(
                    <div key={i}>
                        <span className={ele.completed ? "completed" : " "}>{ele.name}</span>
                        <button onClick={()=> handleToggle(i)}>
                            {ele.completed ? "Undo" : "Completed"}
                        </button>
                        <button onClick={()=> deleteTask(i)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)