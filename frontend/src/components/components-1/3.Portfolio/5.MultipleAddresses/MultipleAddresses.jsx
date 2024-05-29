import React from 'react'
import img from '../imgs/dashboard-1.gif'
import './MultipleAddresses.css'

function MultipleAddresses() {

    return (

        <>
            <div className='MultipleAddresses'>
                <div className="MultipleAddresses-left">
                    <img src={img} alt="" />
                </div>
                <div className="MultipleAddresses-right">
                    <h1>Track Multiple Addresses as a Single Portfolio</h1>
                    <p>Have assets that span across numerous addresses on
                        several blockchains? Simply ceate a portfolio and add
                        as many addresses as you need. Easily monitor all your
                        balances and transactions in one place.Additionally, you can create multiple portfolios to keep an eye on other addresses of interest</p>
                </div>
            </div>
        </>

    )

}

export default MultipleAddresses;