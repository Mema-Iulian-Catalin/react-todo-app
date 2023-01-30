import React from 'react'

const ListOfTodos = ({ todos }) => {

    const todosList = todos.map(({ message }, index) => {
        return (
            <li key={index}> {message} </li>
        )
    })
    
    return (
        <ul>
            {todosList}
        </ul>
    )
}

export default ListOfTodos