import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveTodo, updateTodo } from '../features/todos/todoSlice';

const Form = () => {

    const { edit } = useSelector(state => state.todos)

    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const { title, description } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (edit.editMode) {
            dispatch(updateTodo({
                _id : edit.todo._id,
                title,
                description
            }))
        } else {
            dispatch(saveTodo(formData))
        }

        setFormData({
            title: "",
            description: ""
        })
    }

    useEffect(() => {
        setFormData({
            title: edit.todo.title,
            description: edit.todo.description
        })
    }, [edit])

    return (
        <form className="my-4" onSubmit={handleSubmit}>
            <h1 className="display-4 text-primary my-4 fw-medium">CRUD API</h1>
            <span className="container d-flex align-items-center justify-content-between ">
                <input type="text"
                    placeholder="Enter Title..."
                    className="form-control py-lg-2 me-3 shadow-sm"
                    name="title" onChange={handleChange} value={title}
                />

                <input type="text"
                    placeholder="Enter Description..."
                    className="form-control py-lg-2 me-3 shadow-sm"
                    name="description" onChange={handleChange} value={description}
                />
                <button className="btn btn-primary w-25 shadow-sm fs-5">ADD</button>
            </span>
        </form>
    )
}

export default Form