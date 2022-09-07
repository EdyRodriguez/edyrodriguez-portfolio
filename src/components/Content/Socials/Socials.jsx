import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import './Socials.css';

export default function Socials() {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/edgar-fernando-rodriguez-rangel-261824160/" className='social-links'
             target="_blank" rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/EdyRodriguez" className='social-links' target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            
        </div>
    )
}
