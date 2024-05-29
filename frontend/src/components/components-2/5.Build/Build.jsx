import React from 'react'
import logo_1 from '../img/logo-8.png'
import logo_2 from '../img/logo-9.png'
import bar from '../img/bar-4.png'
import { FaCheck } from "react-icons/fa6";

function Build() {
    return (
        <div className='w-80% my-32 m-auto'>
            <div>
                <h1 className='text-2xl mb-5'>CRYPTO EXCHANGES & MARKETPLACES</h1>
                <h1 className='text-6xl font-bold'>Build Confidence in Your Platform</h1>

                {/* Logos section */}
                <div className='flex justify-around my-20 mx-36'>
                    <img src={logo_1} alt="" />
                    <img src={logo_2} alt="" />
                </div>
            </div>


            <div className='flex'>
                <div className='w-60%'>
                    <p>The top crypto exchanges and marketplaces use Nansen to
                        scale and make the right decisions. Vet potential listings for
                        scams, prove your reserves, and weed out fraudulent
                        activities. Understand who your users are and what they’re
                        doing to improve your product experience. Never stress out
                        over data integrity anymore</p>
                    <div className='border-2 border-light-green rounded-3xl p-10 mt-10'>
                        <h1 className='text-2xl'>Highlights</h1>
                        <div >
                            <table>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Use Nansen Query to build custom workflow, dashboards, and answer difficult questions. Join
                                        your internal data with our proprietary data to easily
                                        track key business metrics, segment your users,
                                        monitor your benchmarks vs competitors, develop
                                        company strategy, and make decisions</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Build user confidence in your platform. Detect wash trading and connections to Tornado Cash, analyze
                                        historical activity to block fraudulent actors,
                                        establish proof of reserves, and run due diligence
                                        on token ownership before listing tokens</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Improve your product experience. Use Nansen data to build models for personalization, identify and
                                        prioritize VIP users, and create your own custom
                                        labels</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Make time sensitive treasury decisions when major events happen</p></td>
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

export default Build
