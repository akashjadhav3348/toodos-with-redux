import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, edit } from '../features/todoSlice';

const ToodosItem = ({ todoTest, index }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todoTest)

    const [editIndex, setEditIndex] = useState(index)
    const dispatch = useDispatch();

    const updateMyTodo = () => {
        dispatch(edit({
            text: editText,
            index
        }))
        setIsEditing(false)
    }

    return (
        <>
            <div className='d-flex justify-content-between my-3 align-items-center bg-info p-3 rounded gap-3 shadow'>
                {
                    isEditing ? <div>
                        <input type="text" value={editText} onChange={e => setEditText(e.target.value)} />
                    </div> : <div className='fs-5 fw-bold'> {todoTest} </div>
                }


                <div className='d-flex gap-3'>
                    {
                        isEditing ?
                            <button className='btn btn-success' onClick={updateMyTodo}>Update</button> :
                            <button className='btn btn-warning' onClick={() => setIsEditing(true)}>Edit</button>
                    }
                    <button className='btn btn-danger' onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default ToodosItem
