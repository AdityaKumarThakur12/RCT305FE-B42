import { useDispatch } from "react-redux";

const Filter = ()=>{

    const dispatch = useDispatch();
    const handleFilterChange = (e)=>{
        dispatch({type: "SET_FILTER" , payload: {[e.target.name]: e.target.value}})
    }

    return(
        <div>
            <h1>Filter Books</h1>
            <input name="author" placeholder="author" onChange={handleFilterChange} />
            <select name="genre">
                <option value="">All Generes</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-fiction</option>
            </select>
            <select name="status">
                <option value="">All Status</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>
        </div>
    )
}

export default Filter