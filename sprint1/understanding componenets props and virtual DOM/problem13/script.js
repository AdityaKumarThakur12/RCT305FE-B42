function Header(){
    return (
        <div className="header">
            <div><h1>The Right Plan for <br/> <span>Your Buisness</span></h1></div>
            <div>
            <p> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias aliquid nobis voluptatum eveniet totam consequatur provident tempore expedita?.
            </p>
            </div>
        </div>
    )
}

let Card = ({ele})=>{
    return(
        <div className="contents" key={ele.id}>
            <h2>{ele.title}</h2>
            <ul> 
                <li><i className="fa-solid fa-circle-check" style={{marginRight:"10px", color:"green"}}></i>{ele.l1}</li>
                <li><i className="fa-solid fa-circle-check" style={{marginRight:"10px", color:"green"}}></i>{ele.l2}</li>
                <li><i className="fa-solid fa-circle-check" style={{marginRight:"10px", color:"green"}}></i>{ele.l3}</li>
            </ul>
            <h1>{ele.buy}</h1>
            <button>Get Started</button>

        </div>
    )
}

function Content(){
    let arr =[
        {
            title: "Starter",
            l1: "1 Lorem ipsum",
            l2: "Loem, ipsum dolor",
            l3: "Monthly Updates",
            buy: "Free",

        },
        {
            title: "Lorem Plus",
            l1: "1 Lorem ipsum",
            l2: "Loem, ipsum dolor",
            l3: "Monthly Updates",
            buy: "$32.00",

        },
        {
            title: "Lorem Pro",
            l1: "1 Lorem ipsum",
            l2: "Loem, ipsum dolor",
            l3: "Monthly Updates",
            buy: "$50.00",

        }
    ]

    return(
        arr.map((ele,i)=>{
            return(
                <div key={i}>
                    <Card ele={ele}/>
                    
                </div>
            )
        })
    )
}


function App(){
    return(
        <>
            <Header/>
            <Content/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)