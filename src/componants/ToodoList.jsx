import React from 'react'
import AddToodo from './AddToodo'
import DisplyToodos from './DisplyToodos'

const ToodoList = () => {
  return (
    <div className='border border-primary p-3 rounded w-75 mx-auto bg-light border-2 mt-3 shadow'>
         <AddToodo/>
         <DisplyToodos />
    </div>
  )
}

export default ToodoList
