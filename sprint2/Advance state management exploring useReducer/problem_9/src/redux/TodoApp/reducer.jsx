import { ADD_TODO } from "./actions";
import { DELETE_ALL } from "./actions";
import { REMOVE_TODO } from "./actions";
import { UPDATE_CHECKBOX } from "./actions";

const initialState = [
    {id:1, todo:"Buy Laptop", completed:false},
    {id:2, todo:"Buy Iphone", completed:false},
    {id:3, todo:"Buy Home", completed:true},
]

export const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_ALL:
            return  []  
        case REMOVE_TODO:
            let filterTodos = state.filter((todo) => todo.id!==action.payload)    
            return filterTodos
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((ele)=>{
                if(ele.id==action.payload){
                    ele.completed = !ele.completed
                }
                todoArray.push(ele)
            })   
            return todoArray; 
        default: return state;
    }
}