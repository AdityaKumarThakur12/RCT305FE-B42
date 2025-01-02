const {useState, useEffect} = React;

function App(){
    let[title, setTitle] = useState(document.title);
    useEffect(()=>{
        document.title = title;
    }, [title])

    function changeTitle(){
        let count = 0;
        const newTitle = `Title changed ${count++}`;
        setTitle(newTitle)
    }
    return(
        <>
            <h1>Change webpage title using React State</h1>
            <button onClick={changeTitle}>Change title</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)