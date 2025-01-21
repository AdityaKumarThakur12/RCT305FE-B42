import { useGlobalContext } from "../context";

export const Search = ()=>{
    const { query, setQuery , isError} = useGlobalContext();
    
    return (
        <section>
            <h2>Search your favourite Movie</h2>
            <form action="#" >
                <input type="text" placeholder="Enter the movie to search" value={query} onChange={(e)=> setQuery(e.target.value)} />
                <button onClick={(e)=> e.preventDefault()}>Submit</button>
            </form>
            <div>
                <p>{isError.show && isError.msg}</p>
            </div>
        </section>
    )
}