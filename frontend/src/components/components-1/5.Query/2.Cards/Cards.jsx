import React from 'react'

function Cards() {

    return (

        <>

            <div className="Query-Cards grid grid-cols-2 gap-16 w-70% m-auto">
                <div className="Query-Card">
                    <div className="Query-Card-top">
                        <img src="" alt="" className='w-96 h-96 bg-black object-cover'/>
                    </div>
                    <div className="Query-Card-bottom">
                        <h1 className='text-xl font-bold mt-2'>Customer Intelligence</h1>
                        <p className='mt-2'>Get a clear view of your customers on-chain, their usage of other products and services, and your performance across different customer segments compared to competitors. Develop strategies for customized products, services, and offerings to attract and retain more customers</p>
                    </div>
                </div>
                <div className="Query-Card">
                    <div className="Query-Card-top">
                        <img src="" alt="" className='w-96 h-96 bg-black'/>
                    </div>
                    <div className="Query-Card-bottom">
                        <h1 className='text-xl font-bold mt-2'>Business Intelligence</h1>
                        <p className='mt-2'>Benchmark your market share against competitors across
                            different user segments. Go beyond superficial metrics like
                            web traffic by analyzing crypto and NFT investors onchain
                            activities and asset holdings</p>
                    </div>
                </div>
                <div className="Query-Card">
                    <div className="Query-Card-top">
                        <img src="" alt="" className='w-96 h-96 bg-black'/>
                    </div>
                    <div className="Query-Card-bottom">
                        <h1 className='text-xl font-bold mt-2'>Ecosystem Growth</h1>
                        <p className='mt-2'>Gain insight into your ecosystem, including user activities,
                            overall performance, and user segments. Evaluate your
                            ecosystem’s success against others. Develop strategies to
                            drive new users and grow your chain.</p>
                            <h3 className='mt-3 text-4xl text-light-green1 inline border-b-4 border-light-green1'><a href="https://www.nansen.ai/post/how-the-arbitrum-foundation-designed-the-distribution-strategy-for-their-token-airdrop">See our case study</a></h3>
                    </div>
                </div>
                <div className="Query-Card">
                    <div className="Query-Card-top">
                        <img src="" alt="" className='w-96 h-96 bg-black'/>
                    </div>
                    <div className="Query-Card-bottom">
                        <h1 className='text-xl font-bold mt-2'>Investment</h1>
                        <p className='mt-2'>Get access to Nansens underlying data, including our
                            proprietary indicators, to test your investment and trading
                            strategies. Integrate Nansen Query in your data pipeline. <br /> <br />
                            In the sample graph above, overlaying the BTC Call-Put Spread
                            indicator to a BTC buy-and-hold strategy delivers an average
                            yearly return of 59% vs 29% for BTC buy & hold, and a
                            maximum price drawdown of -39% vs -77% (data from 1
                            January 2021 to 13 November 2023).</p>
                            <h3 className='mt-3 text-4xl text-light-green1 inline border-b-4 border-light-green1'><a href="https://www.nansen.ai/post/how-l1-digital-ag-uses-on-chain-data-to-analyze-and-evaluate-potential-investment-opportunities">See our case study</a></h3>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Cards;