import React from 'react'

function Story({ img, userName }) {
  return (
    <div>
        <img src={img} alt="" 
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer transition transform duration-200 ease-in-out hover:scale-105'
        />
        <p className='text-sm w-14 truncate text-center'>{userName}</p>
    </div>
  )
}

export default Story