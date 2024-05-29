import React from 'react'
import video from '../video/video-2.mp4'
import './BestCoverage.css'

function BestCoverage() {

    return (

        <>

            <div className="BestCoverage">
                <div className="BestCoverage-left">
                    <h1>Best Coverage for Blockchains and Protocols</h1>
                    <p>Enjoy unparalleled support for over 45 chains and 400 protocols, with ongoing additions.</p>
                    <div className="support">
                        <div className="support-left">
                            <h1>45+</h1>
                            <p>Chains supported</p>
                        </div>
                        <div className="support-right">
                            <h1>400+</h1>
                            <p>Protocols supported</p>
                        </div>
                    </div>
                </div>
                <div className="BestCoverage-right">
                    <video src={video} autoPlay muted loop></video>
                </div>
            </div>

        </>

    )

}

export default BestCoverage;