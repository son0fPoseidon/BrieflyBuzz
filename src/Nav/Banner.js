import React, { useEffect } from 'react';
import './Banner.css';
import starterImg from '../starterImg3.jpg';
import Typed from 'typed.js';

const Banner = () => {
    useEffect(() => {
        const options = {
            strings: ['Find All Stories...', 'Find All Articles...', 'Find All Reviews...', 'Find Your News...!'],
            typeSpeed: 60,
            backSpeed: 60,
            backDelay: 1200,
            loop: true,
            smartBackspace: true,
        };

        // Target the element where you want the typing effect
        const targetElement = document.querySelector('.banner_TypeWriter');

        // Initialize Typed.js
        const typed = new Typed(targetElement, options);

        // Cleanup function to destroy Typed.js instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${starterImg})`,
            backgroundPosition: 'center center',
        }}>
            <span className="banner_TypeWriter"></span>
        </header>
    );
};

export default Banner;
