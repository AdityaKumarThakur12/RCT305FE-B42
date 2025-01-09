function App(){
    const [items, setItems] = React.useState([]);
    const [itemName, setItemName] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    function addItem(){
        if(itemName!==""){
            setItems([...items , { name: itemName, quantity: quantity}]);
        }
        setItemName('');
        setQuantity("1")
    }
    function removeItem(indx){
        const newItems = items.filter((_,i)=> i!== indx);
        setItems(newItems)
    }
    function clearbtn(){
        setItems([])
    }
    return(
        <div className="container">
            <input type="text" value={itemName} onChange={(e)=>{setItemName(e.target.value)}} placeholder="Enter the Items here.."/>
            <input type="number" value={quantity}  onChange={(e)=>{setQuantity(parseInt(e.target.value))}} placeholder="Enter the qunatity"/>
            <button onClick={addItem}>Add Items</button>
            <button onClick={clearbtn}>Clear All</button>
            <div className="list">
                <h2>Added Items</h2>
                {items.map((ele,i)=>(
                    <div key={i}>
                        <span>{ele.name} - {ele.quantity} Kg </span>
                        <button onClick={()=> removeItem(i)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)