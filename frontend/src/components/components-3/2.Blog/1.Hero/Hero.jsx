import React from 'react'
import img_1 from '../imgs/img-1.png'
import img_2 from '../imgs/img-2.png'

function Hero() {
  return (
    <div className='w-80% my-32 m-auto text-center'>
      <h1 className='text-5xl font-bold'>Nansen Blog</h1>
      <p className='mt-5'>The latest news, updates and stories brought to you by Nansen.</p> 

      {/* Cards */}
      <div className='flex gap-10 my-20'>
        <div className='w-90% h-90% overflow-hidden bg-light-green3 p-10'>
          <div className='w-80% overflow-hidden m-auto'>
            <img src={img_2} alt="" className='w-100% h-100% object-cover hover:scale-110  hover:cursor-pointer duration-700'/>
          </div>
          <div className='mt-1 text-left w-80% m-auto'>
            <h1 className='text-3xl text-left inline hover:underline hover:cursor-pointer'>Title</h1>
          </div>
        </div>

        <div className='grid bg-light-green3 p-5'>

          {/* first card 1 */}
          <div className='flex mt-3 ml-3 w-90%  gap-5 hover:cursor-pointer hover:bg-light-green2'>
            <div className='w-60% overflow-hidden'>
              <img src={img_1} alt="" className='w-100% h-100% object-cover hover:scale-110  hover:cursor-pointer duration-700'/>
            </div>
            <div className='text-xl hover:underline hover:cursor-pointer'>
              <h1>Title</h1>
            </div>
          </div>
          
          {/* first card 2 */}
          <div className='flex mt-3 ml-3 w-90% gap-5 hover:cursor-pointer hover:bg-light-green2'>
            <div  className='w-60% overflow-hidden'>
              <img src={img_1} alt=""  className='w-100% h-100% object-cover hover:scale-110  hover:cursor-pointer duration-700'/>
            </div>
            <div  className='text-xl hover:underline hover:cursor-pointer'>
              <h1>Title</h1>
            </div>
          </div>

          {/* first card 3 */}
          <div className='flex mt-3 ml-3 w-90%  gap-5 hover:cursor-pointer hover:bg-light-green2'>
            <div className='w-60% overflow-hidden'>
              <img src={img_1} alt="" className='w-100% h-100% object-cover hover:scale-110  hover:cursor-pointer duration-700' />
            </div>
            <div>
              <h1 className='text-xl hover:underline hover:cursor-pointer'>Title</h1>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero
