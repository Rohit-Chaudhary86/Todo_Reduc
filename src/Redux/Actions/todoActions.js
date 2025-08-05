import{ADD_TODO,DELETE_TODO,TOGGLE_TODO} from "../constants/constants.js"

export function addTodoActionCreator(todo){
    return{
        type:ADD_TODO,
        payload:todo
    }
}
export function deleteTodoActionCreator(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId
    }
}
export function toggleTodoActionCreator(todoId){
    return{
        type:TOGGLE_TODO,
        payload:todoId
    }
}
