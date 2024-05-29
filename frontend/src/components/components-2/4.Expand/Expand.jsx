import React from 'react'
import { FaCheck } from "react-icons/fa6";
import logo_1 from '../img/logo-5.png'
import logo_2 from '../img/logo-6.png'
import logo_3 from '../img/logo-7.png'
import bar from '../img/bar-3.png'

function Expand() {
    return (
        <div className='w-80% m-auto my-32'>
            <div>
                <h1 className='text-xl mb-5'>LAYER 1 AND LAYER 2 BLOCKCHAINS</h1>
                <h1 className='text-6xl font-bold'>Expand Ecosystem and Reach</h1>
            </div>

            {/* Logos Section */}
            <div className='flex justify-around my-20'>
                <img src={logo_1} alt="" />
                <img src={logo_2} alt="" />
                <img src={logo_3} alt="" />
            </div>

            {/* Another Section */}
            <div className='flex gap-10 m-auto'>
                <div className='w-90%'>
                    <p>Increase the number of active users and liquidity on your
                        ecosystem. Provide your community with crypto analytics that
                        allows them to make better decisions. Help your core team
                        deeply understand overall ecosystem trends and user
                        patterns. The top chains use Nansen to grow and decide on
                        matters from growth strategy to tokenomics.</p>

                    {/* Table */}
                    <div className='border-2 border-light-green rounded-3xl p-10 mt-10'>
                        <h1 className='text-2xl'>Highlights</h1>
                        <div >
                            <table>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Extend your reach to the most active and high
                                        liquidity crypto investors who are already on
                                        Nansen</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>10+ chains use Nansen to grow their ecosystems
                                        and make key decisions. Understand your users,
                                        trends, competitors, and make important decisions
                                        for your ecosystem</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Design incentive mechanisms and build custom
                                        dashboards via Nansen Query</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Provide the best analytics and data for you and
                                        your users without having to hire a full engineering
                                        team</p></td>
                                </tr>
                                <tr>
                                    <td><FaCheck className='mr-5 text-light-green text-xl' /></td>
                                    <td><p className='mt-5'>Use our dashboards to identify and prioritize who to
                                        work with or form your user acquisition strategy
                                        before your competitors do.</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                    <div className='w-900%'>
                        <img src={bar} alt=""  className='mt-20'/>
                    </div>
            </div>
        </div>
    )
}

export default Expand
