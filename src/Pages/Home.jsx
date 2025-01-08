import React from 'react';

export default function Home () {
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h3>SSP CANADA</h3>
                <a href='https://www.instagram.com/ssp.canada/' target='_blank' className='contact-btn'>Contact</a>
            </div>

            <div className='home-body'>

                <div className='bg-items'>
                    <div className='gradient'></div>
                    <div className='logo-container'>
                        <img src="/logo_chrome.png" alt="Logo"></img>
                    </div>
                    <div className='shoe-container'>
                        <img src="/shoe.png" alt="Shoe"></img>
                    </div>
                </div>

                <a href='https://www.instagram.com/ssp.canada/' target='_blank' className='main-btn'>Buy/Sell/Trade →</a>
                
                <div class="banner-container">
                    <div class="banner-text">
                        <span>Canada’s Premier Sneaker Plug 🇨🇦 1000+ pairs in stock 💫 10K+ pairs ever sold 📈</span>
                        <span>Canada’s Premier Sneaker Plug 🇨🇦 1000+ pairs in stock 💫 10K+ pairs ever sold 📈</span>
                    </div>
                </div>

            </div>
        </div>

    );
}