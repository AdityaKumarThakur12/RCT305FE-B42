export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = ()=>{
    return async (dispatch) =>{
        dispatch({type: FETCH_DATA_PENDING});
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: data});
        }catch(error){
            dispatch({type: FETCH_DATA_ERROR, payload: error.message})
        }
    }
}