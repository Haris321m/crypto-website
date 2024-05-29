import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Container from './Container/Container';
import BackBone from './BackBone/BackBone';
import Insight from './Insights/Insights';
import Analytics from './Analytics/Analytics';
import Hunch from './Hunch/Hunch';
import Query from './Query/Query';
import Business from './Business/Business';
import gsap from 'gsap';
import './home.css';

const Home = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      gsap.to(cursor, {
        x: mouseX + 30,
        y: mouseY + 30,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const handleHeroEnter = () => {
      cursor.innerHTML = "Crypto";
      gsap.to(cursor, {
        scale: 3,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleHeroLeave = () => {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.addEventListener('mouseenter', handleHeroEnter);
      heroElement.addEventListener('mouseleave', handleHeroLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (heroElement) {
        heroElement.removeEventListener('mouseenter', handleHeroEnter);
        heroElement.removeEventListener('mouseleave', handleHeroLeave);
      }
    };
  }, []);

  return (
    <div>
      <div className="cursor"></div>
      <Hero />
      <Container />
      <BackBone />
      <Insight />
      <Analytics />
      <Hunch />
      <Query />
      <Business />
    </div>
  );
};

export default Home;
