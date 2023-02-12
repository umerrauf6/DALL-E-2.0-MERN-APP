import React from 'react'


const FormFields = ({label,name,type,placeholder,value,isSurpriseMe,handleSurpriseMe,handleChange}) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name}
      className="">
        {label}
      </label >
      {isSurpriseMe && <button className='mx-2 text-xs bg-gray-400 p-[5px] rounded' type="button" onClick={handleSurpriseMe}>Surprise Me</button>}
      <input className='block mb-2 w-full border rounded p-2 mt-2 border-gray-200 focus:border-gray-600'  type={type} placeholder={placeholder} value={value} onChange={handleChange} />
    </div>

  )
}

export default FormFields
