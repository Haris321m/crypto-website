import React from 'react'

function Card(item) {
  return (
    <div className='bg-light-green2 h-96 hover:cursor-pointer'>
      <div className='overflow-hidden'>
        <div className='w-100% h-56 hover:scale-110 duration-300 '><img src={item.img} alt="" className='w-100% h-100% object-cover'/></div>
      </div>
      <div className='p-5'>
        <h1 className='text-xl'>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default Card;