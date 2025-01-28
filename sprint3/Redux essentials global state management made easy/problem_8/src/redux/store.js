import {createStore, applyMiddleware} from "redux"
import { rootReducer } from "./reducer"
import actiontypesLogger from "./actiontypeLogger"
import payloadLogger from "./payloadLogger"

const store = createStore(rootReducer, applyMiddleware(actiontypesLogger,payloadLogger))
export default store
