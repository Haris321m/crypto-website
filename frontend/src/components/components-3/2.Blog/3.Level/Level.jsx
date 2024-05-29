import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Level() {
  return (
    <div className='mt-32 w-80% m-auto text-center'>
      <h1 className='text-5xl w-50% m-auto font-bold'>Level Up Your Crypto Game Today</h1>
      <p className='mt-5'>Sign up today and stay ahead of the market.</p>
      <button className='flex text-2xl items-center px-5 py-3 bg-light-green text-black hover:cursor-pointer gap-3 hover:gap-6 duration-300 rounded-xl mt-5 m-auto'>Start for free <FaArrowRight /></button>
    </div>
  )
}
