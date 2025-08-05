import {
  addTodoActionCreator,
  deleteTodoActionCreator,
} from "./Actions/todoActions.js";
import { store } from "./store.js";

store.dispatch(addTodoActionCreator("buy milk"));
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreator("buy cheese"));
console.log(store.getState().todoState);
store.dispatch(addTodoActionCreator("buy egg"));
console.log(store.getState().todoState);
// console.log(store.getState())
// //  You need to read the state *after* dispatching
// // const stateAfterAdds = store.getState();
// // const firstTodoId = stateAfterAdds.todos[0].id;
// // store.dispatch(deleteTodoActionCreator(firstTodoId));
// store.dispatch(deleteTodoActionCreator(store.getState().todos[0].id))
console.log(store.getState());
