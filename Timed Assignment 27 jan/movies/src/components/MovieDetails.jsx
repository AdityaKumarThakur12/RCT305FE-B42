import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=c8ff7400&i=${imdbID}`);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError('Error fetching movie details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovieDetails();
  }, [imdbID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px', color:"white", width:"50%", margin:"auto", marginTop:"20px", border:"1px solid gray", borderRadius:"30px" , textAlign:"center"}}>
      <button 
        onClick={() => navigate('/')} 
        style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Back to Results
      </button>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>{movie.Title}</h1>
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        style={{ marginTop: '20px', border:"1px solid gray", borderRadius:"30px", width: '300px', borderRadius: '10px' }} 
      />
      <p style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{movie.Year}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{movie.Genre}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{movie.Director}</p>
      <p style={{ fontSize: '1rem', marginTop: '20px', fontStyle: 'italic' }}>{movie.Plot}</p>
      
    </div>
  );
};

export default MovieDetails;
