import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoActionCreator } from '../Redux/Actions/todoActions'

function TodoInput() {
    const dispatch=useDispatch()
    const[todo,setTodo]=useState('')
    function addTodoToStore(){
          dispatch(addTodoActionCreator(todo))
    }
  return (
    <>
     <div>
        <input type="text" onChange={e => setTodo(e.target.value)} value={todo} />
        <button onClick={addTodoToStore} >Add todo</button>
     </div>
    </>
  )
}

export default TodoInput