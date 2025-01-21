
const initialState = [];

const BookReducer = (state=initialState, action)=>{
      switch(action.type){
        case "ADD_BOOK":
            return [...state, action.payload]
        default:
            return state    
      }
      
}
export default BookReducer