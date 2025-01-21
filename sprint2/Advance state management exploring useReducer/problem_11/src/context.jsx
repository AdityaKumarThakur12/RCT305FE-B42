import {  createContext, useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=c8ff7400`

const AppContext = createContext();

const AppProvider = ({ children }) =>{
    const [isloading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({show: "false", msg: ""})
    const [query, setQuery] = useState("titanic")

    const getMovies = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search)
            }else{
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        }catch (error){
           console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(`${API_URL}&s=${query}`)
    },[query])

    return <AppContext.Provider value={{isloading, isError, movie, query, setQuery}}>
        {children}
        </AppContext.Provider>
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}