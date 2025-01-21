import {legacy_createStore} from "redux"
import { countReducer } from "./reducer"

export const store = legacy_createStore(countReducer)