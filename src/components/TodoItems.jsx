import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoActionCreator } from '../Redux/Actions/todoActions.js'

function TodoItem({text,isCompleted,id}) {
  const dispatch=useDispatch()
  function deleteTodoFromStore(){
     dispatch(deleteTodoActionCreator(id))
  }
  return (
    <>
    <div className='todo-items'>
      <input type="checkbox" checked={isCompleted} />
      <p>{text}</p>
      <button onClick={deleteTodoFromStore} >X</button>
    </div>
    </>
  )
}

export default TodoItem