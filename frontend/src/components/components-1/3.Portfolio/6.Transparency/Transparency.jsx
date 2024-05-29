import React from 'react'
import img from '../imgs/dashboard-1.gif'
import './Transparency.css'

function Transparency() {

    return (

        <>

            <div className='Transparency'>
                <div className="Transparency-left">
                    <h1>Transparency For All: Track Exchange Holdings</h1>
                    <p>The collapse of FTX on November 10, 2022, raised concerns about the reserves held by centralized exchanges, leaving customers uncertain about the safety of their funds.
                        <br />
                        <br />
                        Nansen Portfolio emerged as an effective solution. It consolidates exchange wallet addresses on major blockchains such as Bitcoin, Ethereum, and other EVM or non EVM chains, allowing users to easily track the exchange holdings from a single comprehensive dashboard.
                        <br />
                        <br />
                        This not only provides crypto traders and investors more visibility into the assets on centralized platforms, but also helps exchanges in building trust and credibility with their communities.
                    </p>
                    <h3><a href="https://portfolio.nansen.ai/entities">See All Exchange Holdings</a></h3>
                </div>
                <div className="Transparency-right">
                    <img src={img} alt="" />
                </div>
            </div>

        </>

    )

}

export default Transparency;