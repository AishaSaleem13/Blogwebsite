import React from 'react'
import { useId } from 'react'
const id = useId()
 const MainInput = React.forwardRef (function Input({
    label,
    type='text',
    className='',
    ...props

 },ref) {
    
  return (
    <div>
        {label && <label className='block mb-1'
        htmlFor={id}>
            {label}</label>
            }
            <input 
            type ={type}
            className={`px-3 py-2 rounded-lg bg-white
                 text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id} />
    </div>
  )
 })
  


export default MainInput