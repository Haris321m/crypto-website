import React from 'react'
import Hero from './1.Hero/Hero'
import CryptoInvestors from './2.CRYPTO INVESTORS/CRYPTOINVESTORS';
import Assess from './3.Assess/Assess'
import Expand from './4.Expand/Expand';
import Build from './5.Build/Build'
import Optimize from './6.Optimize/Optimize'
import Stress from './7.Stress/Stress'
import Unlock from './8.Unlock/Unlock'

function Solutions() {

    return (

        <>
            <div id='Hero'>
                <Hero />
            </div>
            <div id='CryptoInvestors'>
                <CryptoInvestors />
            </div>
            <div name='VENTURECAPITAL'>
                <Assess />
            </div>
            <div name='Blockchain and L2s'>
                <Expand />
            </div>
            <div name='RYPTO EXCHANGES MARKETPLACES'>
                <Build />
            </div>
            <div name='CRYPTO & DEFI PROTOCOLS'>
                <Optimize />
            </div>
            <div name='INFRASTRUCTURE & SERVICE PROVIDERS'>
                <Stress />
            </div>
            <div name='Unlock'>
                <Unlock />
            </div>

        </>

    )

}

export default Solutions;