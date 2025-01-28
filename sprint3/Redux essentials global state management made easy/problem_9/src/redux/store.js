import { legacy_createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import coffeeReducer from "./reducers";


const store = legacy_createStore(coffeeReducer, applyMiddleware(thunk));

export default store;
