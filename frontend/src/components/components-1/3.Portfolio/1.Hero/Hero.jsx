import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { IoIosArrowForward } from "react-icons/io";
import video_1 from '../video/video-1.mp4';
import { gsap } from 'gsap';

function Hero() {
    const [isActive, setIsActive] = useState(false);
    const midRef = useRef(null);

    const handleMidClick = () => {
        setIsActive(true);
        console.log('Mid element clicked');
    };

    const handleClickOutside = (event) => {
        if (midRef.current && !midRef.current.contains(event.target)) {
            setIsActive(false);
            console.log('Clicked outside mid element');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const animateTank1 = () => {
        gsap.to('.tank-1', { duration: 3, x: 100, rotation: 360, ease: 'power2.inOut', repeat: -1 });
    };
    
    const animateTank2 = () => {
        gsap.to('.tank-2', { duration: 3, x: -100, rotation: 360, ease: 'power2.inOut', repeat: -1 });
    };
    

    useEffect(() => {
        animateTank1();
        animateTank2();
    }, []);

    return (
        <>
            <div className="Port-Hero">
                <div className="tank-1 box"></div>
                <div className="tank-2 box"></div>
                <div className="Port-Hero-top">
                    <h2>NANSEN PORTFOLIO</h2>
                    <h1>One Dashboard for All Your Crypto Holdings</h1>
                    <p>The most comprehensive portfolio tracker in crypto, supporting 45+ chains</p>
                </div>
                <div 
                    className={`Port-Hero-mid ${isActive ? 'active' : ''}`} 
                    onClick={handleMidClick}
                    ref={midRef}
                >
                    <input type="text" placeholder='Track any wallet address or ENS name'/>
                    <h1 className="arrow"><IoIosArrowForward /></h1>
                </div>
                <div className='Port-Hero-bottom'>
                    <video src={video_1} autoPlay muted loop></video>
                </div>
            </div>
        </>
    );
}

export default Hero;
