import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-heading">
            <h1 className='footer-heading-h1'>STAY UPDATED</h1>
            <p className='footer-heading-para'>Sign up to our newsletter and hear about the big ideas and new campaigns, taking place all around the world, that are helping to drive progress towards the Global Goals.</p>
            <h2>Created By Team Developers </h2>
            <div className="icons">
                <FontAwesomeIcon icon={faWhatsapp} className='fa-face' />
                <FontAwesomeIcon icon={faInstagram} className='fa-insta' />
                <FontAwesomeIcon icon={faTwitter} className='fa-whatapp' />
                <FontAwesomeIcon icon={faFacebook} className='fa-face' />
            </div>
        </div>
    );
}

export default Footer;