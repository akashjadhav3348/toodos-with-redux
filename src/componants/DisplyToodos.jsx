import React from 'react'
import ToodosItem from './ToodosItem'
import { useSelector } from 'react-redux'

const DisplyToodos = () => {
    const todos = useSelector((state) => state.todos.value)
    return (
        <>
            <div>
                {(todos.length === 0) ? (<h4 className='text-center mt-3 text-danger fw-bold fs-4 border-bottom border-primary pb-3' >No Display Toodo</h4>) : null}
                {
                    todos.map((item, index) => <ToodosItem todoTest={item} key={index} index={index} />)
                }
            </div>
        </>
    )
}

export default DisplyToodos
