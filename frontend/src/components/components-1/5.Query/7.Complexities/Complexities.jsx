import React from 'react'
import img from '../img/bar-1.png'

function Complexities(){

    return(

        <>
        
            <div className="Complexities text-center w-80% m-auto my-32">
                <h1 className='text-5xl font-bold w-70% m-auto'>We Obsess Over Complexities to Give You the Right Data</h1>
                <p className='m-auto my-7 text-sm w-60% '>We apply our knowledge from labelling 300M+ addresses to remove noise from the data so that you don t have to.</p>
                <p><a href="#" className='underline'>See top ETH sectors and entities</a></p>
                <img src={img} alt="" className='m-auto mt-10'/>
            </div>

        </>

    )

}

export default Complexities;