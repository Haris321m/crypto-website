import React from 'react'
import img from '../img/img.png'
import logo_1 from '../img/logo-1.png'
import logo_2 from '../img/logo-2.png'
import logo_3 from '../img/logo-3.png'
import logo_4 from '../img/logo-4.png'
import logo_5 from '../img/logo-5.png'
import logo_6 from '../img/logo-6.png'
import logo_7 from '../img/logo-7.png'
import logo_8 from '../img/logo-8.png'
import logo_9 from '../img/logo-9.png'
import logo_10 from '../img/logo-10.png'
import logo_11 from '../img/logo-11.png'
import logo_12 from '../img/logo-12.png'

function Anything() {

    return (

        <>
            <div className="Anything">
                <div className='Anything-top text-center m-auto text-6xl mt-56'>
                    <h1>Do Anything With Nansen Query</h1>
                    <img src={img} alt="" className='m-auto w-80% mt-10' />
                </div>
                <div className="Anything-bottom m-auto">
                    <h3 className='m-auto text-center text-3xl my-14'>The Smartest Investors and Crypto Teams Use Nansen to Win</h3>
                    <div className="Anything-bottom-img">
                        <div className='grid grid-cols-6 w-60% gap-10 m-auto'>
                            <img className='w-100%' src={logo_1} alt="" />
                            <img className='w-100%' src={logo_2} alt="" />
                            <img className='w-100%' src={logo_3} alt="" />
                            <img className='w-100%' src={logo_4} alt="" />
                            <img className='w-100%' src={logo_5} alt="" />
                            <img className='w-100%' src={logo_6} alt="" />
                        </div>
                        <div className='grid grid-cols-6 w-70% gap-10 mt-10 m-auto'>
                            <img className='w-100% h-100% object-cover' src={logo_7} alt="" />
                            <img className='w-100% h-100% object-cover' src={logo_8} alt="" />
                            <img className='w-100% h-100% object-cover' src={logo_9} alt="" />
                            <img className='w-100% h-100% object-cover' src={logo_10} alt="" />
                            <img className='w-100% h-100% object-cover' src={logo_11} alt="" />
                            <img className='w-100% h-100% object-cover' src={logo_12} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Anything;