import React from 'react'
import TodoItem from './todoItems'
import { useSelector } from 'react-redux'

function TodoList( ) {
  const todos=useSelector(state=>state.todoState.todos)
  return (
    <>
     <div>
      Todo List: <br/>
        {todos.map(todoItem=>{
            return(
               <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} isCompleted={todoItem.completed} />
            )
        })}
     </div>
    </>
  )
}

export default TodoList