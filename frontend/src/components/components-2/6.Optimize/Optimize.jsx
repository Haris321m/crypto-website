import React from 'react'
import logo_1 from '../img/logo-10.png'
import logo_2 from '../img/logo-11.png'
import bar from '../img/bar-5.png'
import { FaCheck } from "react-icons/fa6";

function Optimize() {
    return (
        <div className='w-80% my-32 m-auto'>
            <div>
                <h1 className='text-2xl mb-5'>CRYPTO & DEFI PROTOCOLS</h1>
                <h1 className='text-6xl font-bold'>Optimize Liquidity and Manage Risk</h1>

                {/* Logos section */}
                <div className='flex justify-around my-20 mx-36'>
                    <img src={logo_1} alt="" />
                    <img src={logo_2} alt="" />
                </div>
            </div>


            <div className='flex'>
                <div className='w-60%'>
                    <p>Use Nansen to help you find insights that will increase and
                        optimize your protocol s growth while preventing attacks from
                        bad actors. From analyzing blockchain events, constructing
                        models to manage risk, to optimizing liquidity and designing
                        effective reward and incentive programs. The top DeFi teams
                        are on Nansen</p>
                    <div className='border-2 border-light-green rounded-3xl p-10 mt-10'>
                        <h1 className='text-2xl'>Highlights</h1>
                        <div >
                            <table>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Analyze on chain data with Nansen Query to adjust
                                        key parameters for your protocol to improve capital
                                        efficiency, fees, risk, and incentives</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Process raw data into domain specific datasets
                                        votes, liquidations and others and easily integrate
                                        into your workflow</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Track metrics, trends and volume of specific
                                        tokens, wallets or entities</p></td>
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
                <p>The Alpha plan gives us all the benefits of Nansens on chain data merged with a community of crypto natives and industry
                    mavericks. We especially enjoy participating in the war room
                    calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry.</p>
            </div>
        </div>
    )
}

export default Optimize;
