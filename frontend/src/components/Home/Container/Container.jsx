import React, { useEffect, useRef } from 'react';
import './Container.css';
import { SiPolygon, SiOpensea, SiChainlink } from "react-icons/si";
import { FaHillAvalanche } from "react-icons/fa6";
import { GiGauntlet } from "react-icons/gi";
import { RiContrastDrop2Fill } from "react-icons/ri";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        gsap.fromTo(container, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 90%', 
                    end: 'bottom 60%', 
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                }
            } 
        );

    }, []);

    return (
        <div ref={containerRef} className='Home-container'>
            <div className="container-top">
                <h2>The Smartest Investors and Crypto Teams Use Nansen to Win</h2>
            </div>
            <div className="container-bottom">
                <ul>
                    <li>ACCEL</li>
                    <li>coinbase</li>
                    <li><SiChainlink /> Chainlink</li>
                    <li>ARBITRUM</li>
                    <li><RiContrastDrop2Fill /> consensys</li>
                    <li>a16z</li>
                    <li><GiGauntlet /> Gauntlet</li>
                    <li><FaHillAvalanche /> Avalanche</li>
                    <li><SiPolygon /> Polygon</li>
                    <li><SiOpensea /> OpenSea</li>
                </ul>
            </div>
        </div>
    );
};

export default Container;
