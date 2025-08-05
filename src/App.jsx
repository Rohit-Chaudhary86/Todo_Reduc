import React from 'react'
import TodoInput from './components/TodoInput'
import { useSelector } from 'react-redux'
import TodoList from './components/todoList'

function App() {
  
  return (
    <>
     <h1>Todo Input</h1>
     <TodoInput />
     <TodoList />
    </>
  )
}
export default App
