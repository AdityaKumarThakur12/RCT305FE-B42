import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer'
import errorMiddleWare from './errorMiddleWare'

const store = createStore(
    rootReducer,
    applyMiddleware(errorMiddleWare)
);

export default store;
