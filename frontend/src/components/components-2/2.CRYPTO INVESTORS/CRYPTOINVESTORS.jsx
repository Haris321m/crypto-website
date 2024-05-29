import React from 'react'
import logo from '../img/amber.png'
import img_1 from '../img/bar.png'
import { FaCheck } from "react-icons/fa6";

function CryptoInvestors() {

    return (

        <>
            <div className='w-80% m-auto my-32'>
                <div>
                    <h2 className='text-2xl font-thin mb-7'>CRYPTO INVESTORS</h2>
                    <h1 className='text-5xl font-bold'>Surface the Signal.</h1>
                    <h1 className='text-5xl font-bold'>Manage Performance and Risk</h1>
                </div>
                <div className='my-20'>
                    <img src={logo} alt="" className='m-auto' />
                </div>

                <div className='flex gap-9'>
                    <div className='w-60% '>
                        <p>Understand the market, make sense of price changes, form
                            your investment strategy, find the opportunities, take action,
                            and analyze your performance. Use Nansens 250M+ labeled
                            addresses and proprietary data to support your work, from
                            market making and momentum investing, to airdrop hunting,
                            yield farming and others.</p>
                        <div className='mt-5 border-2 border-light-green1 p-5 rounded-3xl'>
                            <h1 className='text-2xl'>Level up with Nansen:</h1>
                            <div >
                                <table>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>ind tokens and NFTs to buy with our full suite of
                                            tools: search, trending dashboard, indices, item and
                                            rarity profiler, and many others. See how a trade
                                            relates to other transactions, addresses, and tokens
                                            in ways that you can t see elsewhere</p></td>
                                    </tr>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>Use Nansens smart money signals to analyze how
                                            the top investors are making money and what they
                                            are holding to form your trading strategy</p></td>
                                    </tr>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>Set up on chain alerts to monitor liquidation risk in
                                            lending protocols and spot catastrophic risk.
                                            Manage your holdings across 40+ chains via
                                            Nansen Portfolio</p></td>
                                    </tr>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>Discover curated insights from Nansens research
                                            reports</p></td>
                                    </tr>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>Programmatically access on chain data via Nansen
                                            Query to form or backtest your investment strategy</p></td>
                                    </tr>
                                    <tr>
                                        <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                        <td><p className='mt-5'>Join our exclusive <a href="#" className='underline text-light-green'>Nansen Alpha community</a> help
                                            you stay further ahead</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img_1} alt="img" className='mt-32'/>
                    </div>
                </div>
                <div>
                    <p className='m-auto mt-10 w-80%  text-center text-xl'>The Alpha plan gives us all the benefits of Nansens on chain data merged with a community of crypto natives and industry
                        mavericks. We especially enjoy participating in the war room
                        calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry.</p>
                </div>
            </div >
        </>

    )

}

export default CryptoInvestors;