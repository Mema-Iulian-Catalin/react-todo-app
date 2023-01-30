import React, { useState } from 'react'

function ToDoInput( { addTodo }) {

  const [todoMessage, setTodoMessage] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todoMessage)

    setTodoMessage('')
  }

  return (
    <form>
        <input 
            value={todoMessage} 
            onChange={(e) => setTodoMessage(e.target.value)} 
            type="text" />
        <button 
            type='submit' 
            onClick={(e) => handleSubmit(e)}>
                Add Todo
        </button>
    </form>
  )
}

export default ToDoInput