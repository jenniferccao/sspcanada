import React from 'react';

export default function Footer () {
    return (
        <div className='footer-container'>
            <img src={`${process.env.PUBLIC_URL}/ssp_black.png`} alt="SSP 2024" />
        </div>
    );
}