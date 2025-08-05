import {  createStore,combineReducers } from "redux";
import {todoReducer} from "./Reducers/todoReduer.js"
import  addUserReducer  from "./Reducers/userReducer.js";
const rootReducer=combineReducers({
     userState:addUserReducer,
     todoState:todoReducer
})

 const store=createStore(rootReducer)
 export default store;
//console.log(store.getState())
