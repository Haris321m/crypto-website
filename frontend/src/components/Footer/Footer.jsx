import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer flex flex-col md:flex-row gap-10 p-10 bg-light-green3 border-2 border-light-green1'>
      <img src={logo} alt="Logo" className="w-24 md:w-auto" />
      <div className="list flex flex-col md:flex-row flex-wrap gap-10 md:gap-20">
        <ul className='font-medium'>
          <h4 className='text-xl font-bold'>Resources</h4>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Insights</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Blog</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Guides</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Help Center</li>
        </ul>
        <ul>
          <h4 className='text-xl font-bold'>Contact Us</h4>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>General Enquiry</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Support</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Press</li>
        </ul>
        <ul>
          <h4 className='text-xl font-bold'>Company</h4>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>About Us</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Pricing</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Careers</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Legal</li>
        </ul>
        <ul>
          <h4 className='text-xl font-bold'>Social</h4>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>X (Twitter)</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Discord</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>LinkedIn</li>
          <li className='mt-5 hover:cursor-pointer hover:text-light-green1'>Youtube</li>
        </ul>
      </div>
      <h5 className="text-center md:text-left mt-5 md:mt-0">© 2024 Nansen. All Rights Reserved</h5>
    </div>
  );
};

export default Footer;
