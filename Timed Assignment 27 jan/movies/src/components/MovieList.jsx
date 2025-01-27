import { Link } from 'react-router-dom';

const MovieList = ({ movies, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error){
    <p>{error}</p>;
    console.log(error)
  } 

  return (
    <div style={{display:"flex", color:"white", width:"100%", marginLeft:"180px",marginTop:"60px", flexWrap:"wrap"}}>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <div style={{marginRight:"100px", border:"1px solid gray", height:"430px", width:"280px", marginBottom:"18px", padding:"20px", borderRadius:"20px", boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)'}}>
            <img src={movie.Poster} alt={movie.Title} height="300px" width="260px" style={{boxShadow: '0 0 15px rgba(0, 255, 255, 0.7)'}} />
            <h3 style={{fontSize:"24px", textAlign:"center", color:"white", textDecoration:"none"}}>{movie.Title}</h3>
            <h3 style={{fontSize:"20px", color:"white", textAlign:"center"}}>{movie.Year}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
