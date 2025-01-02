const Card = ({title,children})=>{
    return(
        <div className="cards" style={{border:"1px solid grey"}}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}


function App(){
    return(
        <div className="container" >
            <Card title="card1">
                This is the Content of card 1
            </Card>
            <Card title="card2">
                This is the Content of card 2
            </Card>
            <Card title="card3">
                This is the Content of card 3
            </Card>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)