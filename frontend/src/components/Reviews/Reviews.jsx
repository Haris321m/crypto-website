import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Reviews.css';

const Reviews = () => {

  return (
    <div className='reviews'>
      <h1>Loved by the Smartest Investors and Teams in Crypto</h1>
      <div className="carts-wrapper">
        <div  className="row-positive carts">
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
        </div>
        <div  className="row-negative carts">
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
          <div className="cart">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor vitae libero blandit tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
