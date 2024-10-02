import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, edit } from '../features/todoSlice';

const ToodosItem = ( { todoTest , index}) => {
    const dispalyToodos = useDispatch
    ();
        
    return (
        <>
        <div className='d-flex justify-content-between my-3 align-items-center bg-info p-3 rounded gap-3 text-white shadow'>
                <div className='fs-5 fw-bold'> {todoTest} </div>
            <div className='d-flex gap-3'>
                <button className='btn btn-success' onClick={ () => dispalyToodos(edit({text: todoTest, index: index}))}>Edit</button>
                <button className='btn btn-danger' onClick={ () => dispalyToodos(deleteTodo(index))}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default ToodosItem
