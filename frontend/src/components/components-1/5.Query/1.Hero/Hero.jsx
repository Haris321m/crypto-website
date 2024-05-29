import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Hero(){

    return(

        <>
        
            <div className='Query-Hero text-center my-28'>
                <h3 className='text-2xl'>NANSEN QUERY</h3>
                <h1 className='text-7xl font-bold w-70% m-auto mt-4'>Empowering Crypto Teams With In-Depth Blockchain Data</h1>
                <p className='mt-3'>Seamlessly execute complex queries and streamline workflows to transform onchain data into strategic insights</p>
                <button className='flex text-center bg-light-green p-5 text-2xl text-black m-auto gap-3 rounded-xl mt-3 hover:cursor-pointer hover:gap-6 transition  hover:bg-white hover:scale-125'>Contact Sales <GoArrowRight /></button>
            </div>

        </>

    )

}

export default Hero;