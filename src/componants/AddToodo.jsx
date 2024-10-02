import React from 'react'

const AddToodo = () => {
    return (
        <>
            <h1 className="text-center mt-3 text-primary fw-bold fs-1 border-bottom border-primary pb-3" >Add Toodo </h1>
            <div className="d-flex gap-3 mt-3 justify-content-center">
                <input type="text" className='form-control' placeholder='Enter Toodo' required/>
                <button className='btn btn-primary w-25' type='submit'>Add Toodo</button>
            </div>
        </>
    )
}

export default AddToodo
