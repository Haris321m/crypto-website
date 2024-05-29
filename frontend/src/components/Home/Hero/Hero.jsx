import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from 'gsap';
import './Hero.css'; // If you have custom CSS, you can still use it alongside Tailwind
import video from '../../../assets/video.mp4';

const Hero = () => {
    const heroRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hero = heroRef.current;

        gsap.fromTo(hero, 
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.1,
          }
        );

        // Simulate video loading for demonstration
        const handleVideoLoad = () => setIsLoading(false);
        
        // Assume the video is fully loaded after 1 second (for demonstration purposes)
        setTimeout(handleVideoLoad, 1000);

    }, []);

    return (
        <div className={`HERO ${isLoading ? 'loading' : ''}`}>
            <video src={video} autoPlay muted loop></video>
            <div ref={heroRef} className='hero md:w-3/4 lg:w-2/3 py-12 md:py-24 lg:py-32 m-auto text-center'>
                <div className="hero-top mb-10">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>Onchain Data Platform Trusted by the Best</h1>
                </div>
                <div className="my-8 md:my-12 text-lg md:text-xl lg:text-2xl">
                    <p>Empowering crypto investors with deep insights to make more informed decisions</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-3/4 lg:w-2/3 mx-auto">
                    <button className="mb-4 md:mb-0 md:mr-4 bg-light-green text-black px-8 md:px-12 py-4 md:py-6 rounded-xl flex items-center justify-center gap-2 hover:gap-4 duration-300">
                        <span className='text-lg md:text-xl'>Launch App</span>
                        <IoIosArrowRoundForward className='text-2xl md:text-3xl' />
                    </button>
                    <button className="border-2 border-light-green hover:text-black hover:bg-white hover:border-white text-light-green px-8 md:px-12 py-4 md:py-6 rounded-xl flex items-center justify-center gap-2 hover:gap-4 duration-300">
                        <span className='text-lg md:text-xl'>Explore Pricing</span>
                        <IoIosArrowRoundForward className='text-2xl md:text-3xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
