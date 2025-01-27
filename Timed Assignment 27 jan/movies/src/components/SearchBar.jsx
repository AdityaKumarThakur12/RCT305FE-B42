const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div>
        <h1 style={{textAlign:"center", color:"white", textShadow: '0 0 5px #00ff00'}}>Search for movies</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          style={{width:"50%", padding:"10px 20px", border:"2px solid red", borderRadius:"12px", marginLeft:"350px", marginBottom:"10px"}}
        />
      </div>
    );
  };
  
  export default SearchBar;
  