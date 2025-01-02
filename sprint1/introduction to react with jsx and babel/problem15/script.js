const {useState} = React;

function App(){
    const [currentPage, setCurrentPage] = useState('home');
    const renderContent = ()=>{
        switch (currentPage){
            case 'home':
                return <h2 className="content">Welcome to Home</h2>;
            case 'about':
                return <h2 className="content">About Us</h2>;
            case 'contact':
                return <h2 className="content">Contact Us</h2>;
            default:
                return <h2 className="content">Welcome to home</h2>            
        }
    };
    return (
        <div className="container">
            <div className="navbar">
                <button onClick={()=> setCurrentPage('home')} className="button">Home</button>
                <button onClick={()=> setCurrentPage('about')} className="button">About</button>
                <button onClick={()=> setCurrentPage('contact')} className="button">Contact</button>
            </div>
            <div className="cont-container">
                {renderContent()}
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)