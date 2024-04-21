import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <h1 className='footer_container_title'>
          News Ex<span className='footer_container_title_diffCol'>press</span>
        </h1>
        <ul className='footer_list'>
          <li className='footer_listItem'>About Us</li>
          <li className='footer_listItem'>Feedback</li>
          <li className='footer_listItem'>Contact Us</li>
          <li className='footer_listItem'>Privacy Policy</li>
        </ul>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='footer_wavesvg'
      >
        <path
          fill='#a2d9ff'
          fillOpacity='1'
          d='M0,0L48,10.7C96,21,192,43,288,90.7C384,139,480,213,576,213.3C672,213,768,139,864,106.7C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>

      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' 
        className='footer_wavesvg'
      >
        <path
          fill='#a2d9ff'
          fill-opacity='1'
          d='M0,32L48,64C96,96,192,160,288,170.7C384,181,480,139,576,106.7C672,75,768,53,864,64C960,75,1056,117,1152,138.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg> */}
      <div className="footer_baseFooter">
        <span className="footer_baseFooter_copyRight">Copyright &copy; 2024 by BrieflyBuzz. All rights reserved. For reprint rights: News Express Services</span>
      </div>
    </div>
  );
};

export default Footer;
