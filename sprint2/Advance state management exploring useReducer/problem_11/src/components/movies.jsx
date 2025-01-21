import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context"

export const Movies = ()=>{
    const { movie } = useGlobalContext();
    return(
       <section>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", margin:"50px", gap:"100px"}}>
            {movie.map((ele)=>{
                const { imdbID, Title, Poster } = ele;
                const movieName = Title.substring(0,15)
                return(
                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                        <div style={{border:"1px solid grey", display:"flex", flexDirection:'column', alignItems:"center", justifyContent:"space-around", borderRadius:"20px"}}>
                            <h2>{movieName.length>=15 ? `${movieName}...` : movieName}</h2>
                            <img src={Poster} alt={imdbID} />
                        </div>
                    </NavLink>
                )
            })}
        </div>
       </section>
    )
}