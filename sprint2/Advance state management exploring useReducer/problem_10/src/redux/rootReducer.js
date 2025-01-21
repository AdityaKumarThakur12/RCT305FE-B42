import { combineReducers } from "redux"
import BookReducer from "./bookReducer";
import FilterReducer from "./filterReducer";

const rootReducer = combineReducers({
   books: BookReducer,
   filter: FilterReducer
})
export default rootReducer;