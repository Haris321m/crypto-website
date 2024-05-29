import React from 'react'
import logo_1 from '../imgs/container-logo-1.png'
import logo_2 from '../imgs/container-logo-2.png'
import './containers.css'

function Containers() {

    return (

        <>

            <div id="containers">
                <div className="container-1">
                    <img src={logo_1} alt=""  className='m-auto'/>
                    <p>The Alpha plan gives us all the benefis of Nansens on-chain
                        data merged with a community of crypto-natives and industry mavericks. We especially enjoy participating in the war room calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry</p>
                </div>
                <div className="container-2">
                    <img src={logo_2} alt="" className='m-auto'/>
                    <p>The Alpha plan gives us all the benefits of Nansens on-chain data merged with a community of crypto-natives and industry mavericks. We especially enjoy participating in the war room calls and macro discussions where we can share our insights and thoughts around the hot topics in the industry</p>
                </div>
            </div>

        </>

    )

}

export default Containers;