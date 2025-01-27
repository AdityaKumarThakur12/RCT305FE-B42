const SortFilter = ({ genres, sortMovies, filterMovies }) => {
    return (
      <div style={{marginLeft:"350px"}}>
        <button style={{padding:"7px 15px", borderRadius:"8px"}} onClick={() => sortMovies('asc')}>Sort by Year (Ascending)</button>
        <button style={{padding:"7px 15px",  borderRadius:"8px", margin:"10px"}} onClick={() => sortMovies('desc')}>Sort by Year (Descending)</button>
        <select style={{padding:"7px 15px",  borderRadius:"8px"}} onChange={(e) => filterMovies(e.target.value)}>
          <option value="All">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SortFilter;
  