import{ADD_TODO,DELETE_TODO,TOGGLE_TODO} from "../constants/constants.js"
import { v4 as uuidv4 } from 'uuid';

const initialState={
    todos:[]
}

export function todoReducer(state=initialState,action){
    if(action.type===ADD_TODO){
        return{
         ...state,
         todos:[
            ...state.todos,
             {id: uuidv4(),text:action.payload,completed:false}
         ]

        }
    }else if(action.type===DELETE_TODO){
        return{
            ...state,
            todos:state.todos.filter(todo => todo.id !=action.payload )
        }
    }else if(action.type===TOGGLE_TODO){
        return{
            ...state,
            todos:state.todos.map(todo=>{
                if(todo.id ===action.payload){
                    return{
                        ...todo,
                         completed:!todo.completed
                    }
                }else{
                    return todo;
                }
            })
        }
    }else{
        return state;
    }
}