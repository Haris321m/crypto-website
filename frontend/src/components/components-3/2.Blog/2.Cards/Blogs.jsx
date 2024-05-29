import React from 'react'
import Content from './arr'
import Card from './Card'

function Blogs() {
    return (
        <div className='w-80% m-auto'>
            <div className='grid grid-cols-3 gap-10'>
            {Content.map((item) => {
                return (
                    <Card key={item.id} img={item.img} title={item.title} description = {item.description} />
                )
            })}
            </div>
            <button className='border-2 border-white mt-10 m-auto inline  p-5 text-2xl rounded-xl hover:cursor-pointer hover:bg-white hover:text-black duration-300'>Next</button>
        </div>
    )
}

export default Blogs
