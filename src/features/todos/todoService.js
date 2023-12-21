import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getAllTodos = async () => {

    const response = await axios.get('/api/todo')
    return response.data;

}

export const addTodo = async (FormData) => {
    const response = await axios.post('/api/todo', FormData)
    return response.data
}

export const removeTodo = async (_id) => {
    const response = await axios.delete('/api/todo/' + _id)
    return response.data
}

export const updateTodoService = async (FormData) => {

    const { _id, title, description } = FormData

    const response = await axios.put('/api/todo/' + _id, { title, description })
    return response.data;
}

