const {useState} = React;

function App(){
    const [isBlue, setBlue] = useState(true);
    function changeColor(){
        setBlue(!isBlue)
    }
    const currentColor = isBlue ? "Blue" : "Red";

    return(
        <div>
        <h1>Toogle Color</h1>
        <button onClick={changeColor}  style={{
            backgroundColor: isBlue ? 'blue' : 'red',
            color: "white",
            boxShadow: "5px 5px 5px grey",
            padding: "10px 25px",
            borderRadius: "5px",
            cursor: "pointer"

        }}>{currentColor}</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)