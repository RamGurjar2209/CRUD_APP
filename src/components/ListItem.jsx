import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, edit, fetchTodos } from '../features/todos/todoSlice'

const ListItem = ({ todo }) => {

    const { isSuccess } = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const handleDelete = (_id) => {
        dispatch(deleteTodo(_id))
        if (isSuccess) {
            dispatch(fetchTodos())
        }
    }


    const handleEdit = (todo)=>{
        dispatch(edit(todo))
    }


    return (
        <li className="list-group-item list-group-item-primary shadow-sm">
            <p className="h1">{todo.title}</p>
            <p className="h4">{todo.description}</p>
            <button className="btn btn-danger btn-lg float-end" onClick={() => handleDelete(todo._id)}>Delete</button>
            <button className="btn btn-warning btn-lg float-end mx-2" onClick={()=>handleEdit(todo)}>Edit</button>
        </li>
    )
}

export default ListItem