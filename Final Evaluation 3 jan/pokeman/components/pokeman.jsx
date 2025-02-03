import { useState, useEffect } from "react"
import axios from "axios"

const Pokeman = () => {
    const [pokeman, setpokeman] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
                // const data = res.data;
                const pokemanDetalis = await Promise.all(
                    res.data.results.map(async (pokeman) => {
                        const details = await axios.get(pokeman.url);
                        return {
                            id: details.data.id,
                            name: details.data.name,
                            url: details.data.name.url,
                            types: details.data.types.map(t => t.type.name),
                            // abilities: details.data.url.map(a => a.abilities)

                        }
                    })
                )
                setpokeman(pokemanDetalis)
                // console.log(data)

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", flexWrap:"wrap"}}>
            {pokeman.map(pokeman => (
                <div key={pokeman.id} style={{width:"30%", border:"1px solid gray",margin:"10px", padding:"10px", backgroundColor:"skyblue"}}>
                    <h1 key={pokeman.id}>
                    {pokeman.id}.  {pokeman.name} 
                    </h1>
                    <h3>{pokeman.types}</h3>
                    {/* <h4>{pokeman.abilities}</h4> */}
                </div>

            ))}

        </div>
    )
}
export default Pokeman