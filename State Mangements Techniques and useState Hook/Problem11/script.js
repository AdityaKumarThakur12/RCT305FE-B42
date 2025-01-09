
function App(){
    const [isShow, setIsShow] = React.useState(false);

    function Toggle(){
        setIsShow(!isShow)
    };
    return(
        <div className="container">
            <button onClick={Toggle}>{isShow ? "Hide" : "Show"}</button>
            {isShow && (
            <div>
                Hello, welcome to the React state management!
            </div>
        )}
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)