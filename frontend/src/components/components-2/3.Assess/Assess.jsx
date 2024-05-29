import React from 'react'
import { FaCheck } from "react-icons/fa6";
import Logo_1 from '../img/logo-1.png'
import Logo_2 from '../img/logo-2.png'
import Logo_3 from '../img/logo-3.png'
import Logo_4 from '../img/logo-4.png'
import bar from '../img/bar-2.png'

export default function Assess() {
    return (
        <div className=' m-auto w-80%'>
            <div>
                <h2 className='text-xl'>VENTURE CAPITAL</h2>
                <h1 className='text-5xl font-bold mt-5'>See the Deal. Asses <br /> the Deal. Win he Deal</h1>
            </div>
            <div className='flex justify-around m-auto mt-10 w-60% '>
                <img src={Logo_1} alt="" />
                <img src={Logo_2} alt="" />
                <img src={Logo_3} alt="" />
                <img src={Logo_4} alt="" />
            </div>
            <div className='flex gap-6 mt-20'>
                <div className='w-60%'>
                    <p>Deal sourcing, analyzing a market landscape, conducting due
                        diligence, researching comps, and writing investment memos.
                        What are the trending projects? What can we find out about
                        liquidity, TVL, gas fees, number of active wallets and token
                        distribution? The best VCs use Nansen for data and insights to move more
                        quickly and confidently on potential investments</p>
                    <div className='border-2 border-light-green p-5 rounded-3xl mt-10'>
                        <h1 className='text-2xl'>Highlights</h1>

                        <table>
                            <tr>
                                <td><FaCheck className='text-xl mr-4 text-light-green' /></td>
                                <td><p className='mt-5'>Increase your dealflow by identifying trending projects on Nansen</p></td>
                            </tr>
                            <tr>
                                <td><FaCheck className='text-xl mr-4 text-light-green' /></td>
                                <td><p className='mt-5'>Understand the market landscape and the potential
                                    investment yourself with our analytical tools, or
                                    read our research reports to form your macro
                                    theses</p></td>
                            </tr>
                            <tr>
                                <td><FaCheck className='text-xl mr-4 text-light-green' /></td>
                                <td><p className='mt-5'>Track companies performance before and after
                                    your investment market share, active users,
                                    transaction activity, token distribution, and more</p></td>
                            </tr>
                            <tr>
                                <td><FaCheck className='text-xl mr-4 text-light-green' /></td>
                                <td><p className='mt-5'>Join Nansen Alpha to research analysts for major
                                    crypto verticals. Dedicated attribution team with
                                    high quality labels. Out of the box analytics for any
                                    token. Capable of deep customization</p></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <img src={bar} alt="" />
                </div>
            </div>
                <div className='mt-20 w-80% text-center m-auto'>
                    
                    <p>
                        The Alpha plan gives us all the benefits of Nansens on chain
                        data merged with a community of crypto natives and industry
                        mavericks. We especially enjoy participating in the war room
                        calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry.
                    </p>
                </div>
            <div className='m-auto w-40% text-center mt-10'>
                <a href="#" className='underline text-light-green'>Learn How L1 Digital AG Uses On-chain Data to Analyze and Evaluate Potential Investment Opportunities</a>
            </div>
        </div>
    )
}
