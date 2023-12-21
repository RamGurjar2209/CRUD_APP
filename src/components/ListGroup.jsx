import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { LinearProgress } from '@mui/material'
import { fetchTodos } from '../features/todos/todoSlice'

const ListGroup = () => {

    const dispatch = useDispatch()

    const { todos, isLoading, isError, isSuccess } = useSelector(state => state.todos)


    useEffect(() => {
        dispatch(fetchTodos())
    }, [])


    if (isLoading) {
        return (
            <LinearProgress />
        )
    }

    if (isError) {
        return (
            <h1 className="text-center my-5 text-primary">Something Went Wrong...</h1>
        )
    }

    if (todos.length === 0) {
        return (
            <h1 className="text-primary text-center my-5">No Todos Yet...</h1>
        )
    }




    return (
        <ul className="list-group my-5 px-3">
            {
                todos.map(todo => <ListItem key={todo._id} todo={todo} />)
            }
        </ul>
    )
}

export default ListGroup