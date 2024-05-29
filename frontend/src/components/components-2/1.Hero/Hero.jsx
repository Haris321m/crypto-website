import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUpLong } from "react-icons/fa6";

function CryptoInvestors() {
    return (
        <div className='flex w-80% m-auto justify-between py-32'>
            <div className='w-96'>
                <h1 className='text-6xl font-bold'>Built for Top Crypto Teams</h1>
                <p className='mt-5'>Do everything with Nansen. Top funds and crypto teams rely
                    on Nansen for investment, business intelligence, user and
                    product analytics, and ecosystem growth. Increase
                    investment returns, gain market intelligence, improve your
                    product, and grow your user base with the most powerful
                    blockchain data platform.</p>
                <button className='px-8 py-4 bg-light-green flex gap-5 items-center hover:cursor-pointer hover:bg-white duration-300 text-black text-xl rounded-xl mt-3'>Contact State <FaArrowRight /></button>
            </div>
            <div className='border-2 border-light-green bg-light-green3 rounded-xl p-5 w-50%'>
                <h1 className='text-gray-300'>Solutions for</h1>
                <div className='pl-5 mt-5'>
                    <ScrollLink to="CryptoInvestors" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'><p>Crypto Investors</p> <FaArrowRight /></h2>
                    </ScrollLink>
                    <ScrollLink to="VENTURECAPITAL" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'>Venture Capital <FaArrowRight /></h2>
                    </ScrollLink>
                    <ScrollLink to="Blockchain and L2s" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'>Blockchain and L2s <FaArrowRight /></h2>
                    </ScrollLink>
                    <ScrollLink to="RYPTO EXCHANGES MARKETPLACES" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'>Exchanges & Marketplaces <FaArrowRight /></h2>
                    </ScrollLink>
                    <ScrollLink to="CRYPTO & DEFI PROTOCOLS" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'>Crypto & DeFi Protocols <FaArrowRight /></h2>
                    </ScrollLink>
                    <ScrollLink to="INFRASTRUCTURE & SERVICE PROVIDERS" smooth={true} duration={500} className='dropdown-link' style={{ cursor: 'pointer' }}>
                        <h2 className='mt-5 border-b-2 border-light-green flex justify-between hover:cursor-pointer hover:font-bold'>Infrastructure & Service Providers <FaArrowRight /></h2>
                    </ScrollLink>
                </div>
            </div>
            <ScrollLink to="Hero" smooth={true} duration={500}>
                <button className='fixed right-10 bottom-10 p-6 border-white rounded-full border-4 hover:cursor-pointer hover:text-black hover:bg-white'><FaArrowUpLong /></button>
            </ScrollLink>
        </div>

    );
}

export default CryptoInvestors;
