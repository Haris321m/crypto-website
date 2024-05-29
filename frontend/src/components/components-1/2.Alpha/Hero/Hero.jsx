import React from 'react'
import './hero.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import img_1 from '../imgs/Rectangle 38.png'
import img_2 from '../imgs/Rectangle 39.png'
import img_3 from '../imgs/Rectangle 40.png'
import img from '../imgs/img.jpg'

function Hero() {

    return (

        <div className='Alpha'>
            <div className="alpha-hero">
                <div className="hero">
                    <h3>ALPHA COMMUNITY</h3>
                    <h1>Generate Outsized
                        Returns With the Ultimate
                        Membership Club in Crypto</h1>
                    <p>Alpha is a highly vetted community of crypto investors, founders and investment experts. Navigate the market
                        alongside the most exclusive community, powered by Nansens full suite of products. Limited spots available.</p>
                    <button>Contact Sales <IoIosArrowRoundForward style={{ fontSize: '2em', background: 'transparent' }} /></button>
                </div>

                <div className="bar">
                    <div className="header">
                        <h1>Performance of Opportunity Shared in Alpha</h1>
                        <p>Nansen Alpha against BTC and ETH</p>
                    </div>
                    <div className="main">
                        <div className="bar-1">
                            <div className='flex'>
                                <img src={img_1} alt="" /><h1 style={{ fontSize: '2em', marginLeft: '10px' }}>111%</h1>
                            </div>
                            <p style={{ fontSize: '2em', marginTop: '10px' }}>Alpha Community</p>
                        </div>
                        <div className="bar-2 m-2">
                            <div className='flex'>
                                <img src={img_2} alt="" /><h1 style={{ fontSize: '2em', marginLeft: '10px' }}>48%</h1>
                            </div>
                            <p style={{ fontSize: '2em', marginTop: '10px' }}>BTC</p>
                        </div>
                        <div className="bar-3 m-2">
                            <div className='flex'>
                                <img src={img_3} alt="" /><h1 style={{ fontSize: '2em', marginLeft: '10px' }}>41%</h1><br />
                            </div>
                            <p style={{ fontSize: '2em', marginTop: '10px' }}>ETH</p>
                        </div>
                        <p style={{ marginTop: '20px' }}>Measured as precentage points. Average max. profitability returns of tokens discussed br Alpha's community over the period of Dec 2022 to Mar 2023</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Hero;