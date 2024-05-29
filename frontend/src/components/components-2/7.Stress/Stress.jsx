import React from 'react'
import logo_1 from '../img/logo-12.png'
import logo_2 from '../img/logo-13.png'
import logo_3 from '../img/logo-14.png'
import bar from '../img/bar-6.png'
import { FaCheck } from "react-icons/fa6";

function Stress() {
    return (
        <div className='w-80% my-32 m-auto'>
            <div>
                <h1 className='text-2xl mb-5'>INFRASTRUCTURE & SERVICE PROVIDERS</h1>
                <h1 className='text-6xl font-bold'>Never Stress Out Over Data Integrity</h1>

                {/* Logos section */}
                <div className='flex justify-around my-20 mx-36'>
                    <img src={logo_1} alt="" />
                    <img src={logo_2} alt="" />
                    <img src={logo_3} alt="" />
                </div>
            </div>


            <div className='flex'>
                <div className='w-60%'>
                    <p>Build your products and services on the most reliable,
                        comprehensive and accurate on chain data. From building
                        reliable oracle services to deciding what to build for your users,
                        or even looking into specific wallets or entities historical
                        transactions as a liquidator  — Nansen gives you an unfair
                        advantage as you build crypto infrastructure and services</p>
                    <div className='border-2 border-light-green rounded-3xl p-10 mt-10'>
                        <h1 className='text-2xl'>Highlights</h1>
                        <div >
                            <table>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Identify and track potential partners and customers for your busines</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Support new monetization models, such as
                                        tracking on chain transactions to get paid on a per transaction basis</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Analyze and track data around dApps, NFT,
                                        stablecoins or specific projects to make product
                                        and company decisions</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Use Nansen data to segment your users, and identify and prioritize VIP users</p></td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bar} alt="img" className='mt-32' />
                </div>
            </div>


            <div className='my-20 w-60% text-xl text-center m-auto'>
                <p>The Alpha plan gives us all the benefits of Nansens on chain
                    data merged with a community of crypto natives and industry
                    mavericks. We especially enjoy participating in the war room
                    calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry.</p>
            </div>
        </div>
    )
}

export default Stress
