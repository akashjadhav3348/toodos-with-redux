import React, { useState } from 'react'
import { add } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

const AddToodo = () => {
    const [inputTodo, setInputTodo] = useState('')
    const dispatch = useDispatch()

    const addNewTodo = () => {
        dispatch(add(inputTodo))
        setInputTodo('')
    }

    return (
        <>
            <h1 className="text-center mt-3 text-primary fw-bold fs-1 border-bottom border-primary pb-3" >Add Toodo </h1>
            <div className="d-flex gap-3 mt-3 justify-content-center">
                <input type="text" className='form-control' placeholder='Enter Toodo' onChange={e => setInputTodo(e.target.value)} value={inputTodo} required />
                <button className='btn btn-primary w-25' onClick={addNewTodo}>Add Toodo</button>
            </div>
        </>
    )
}

export default AddToodo
