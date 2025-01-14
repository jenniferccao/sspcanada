import React from 'react';

export default function History () {
    return (
        <div className='body-container'>
            <div className='body-content'>
                <h1>OUR STORY</h1>
                <p>Founded by Adam Yang in 2020 as Scarborough Sneaker Plug, SSP quickly grew from a local initiative to a Canada-wide community. Our mission is simple: to resell sought-after sneakers while fostering a vibrant community of sneaker enthusiasts. Since opening, we've proudly sold over 10,000 pairs, connecting sneaker lovers across the country with the kicks they crave.</p>

                <img src={`${process.env.PUBLIC_URL}/adam.png`} className='about-image' alt='Instagram Image'></img>
            </div>
        </div>
    );
}