import React from 'react';

export default function Home() {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h3>SSP CANADA</h3>
                <a 
                    href='https://www.instagram.com/ssp.canada/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-btn'
                >
                    Contact
                </a>
            </div>

            <div className='home-body'>
                <div className='bg-items'>
                    <div className='gradient'></div>
                    <div className='logo-container'>
                        <img src={`${process.env.PUBLIC_URL}/logo_chrome.png`} alt="Logo" />
                    </div>
                    <div className='shoe-container'>
                    <img src={`${process.env.PUBLIC_URL}/shoe.png`} alt="Shoe" />
                    </div>
                </div>

                <a 
                    href='https://www.instagram.com/ssp.canada/' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='main-btn'
                >
                    Buy/Sell/Trade →
                </a>
                
                <div className="banner-container">
                    <div className="banner-text">
                        <span>Canada’s Premier Sneaker Plug 🇨🇦 1000+ pairs in stock 💫 10K+ pairs ever sold 📈</span>
                        <span>Canada’s Premier Sneaker Plug 🇨🇦 1000+ pairs in stock 💫 10K+ pairs ever sold 📈</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
