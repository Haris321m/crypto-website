import React, { useState, useEffect, useRef } from 'react';
import './Insights.css';
import img1 from '../../../assets/img.webp';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  useEffect(() => {
    gsap.fromTo(rightRef.current, 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
          end: 'bottom 70%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        }
      }
    );

    gsap.fromTo(leftRef.current, 
      { opacity: 0, x: 100 }, 
      { 
        opacity: 1, x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          end: 'bottom 70%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <div className='insight'>
      <div ref={rightRef} className="right">
        <h1>10X Your Insights, Not Your Workload</h1>
        <p>We bring together everything that the most ambitious crypto investors and teams need to make critical decisions. Use data that no one else, however you like, on one single platform.</p>
      </div>
      <div ref={leftRef} className="left">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Insights;
