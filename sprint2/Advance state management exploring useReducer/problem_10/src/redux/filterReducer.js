
const initialState = {
    author: "",
    genre: "",
    status: "" 
};

const FilterReducer = (state=initialState, action)=>{
    switch(action.type){
        case "SET_FILTER":
            return {...state, ...action.payload};
        default:
            return state;    
    }
}
export default FilterReducer