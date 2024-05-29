import React from 'react';
import './hero.css';
import YouTube from 'react-youtube';

function Hero() {
    const videoId = 'rYQgy8QDEBI'; 

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className='Nansen'>
             <div className="tank-0"></div>
            <div className="hero">
                <h1>Onchain Analytics Platform Designed For Investors</h1>
                <p>Effortlessly Analyze and Track Key Movements and Metrics to Navigate the Market More Effectively</p>
                <button>Launch App</button>
            </div>
            <div className="youtube-container" style={{margin : '6% 0px'}}>
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
    );
}

export default Hero;
