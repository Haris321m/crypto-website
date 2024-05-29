import React from 'react';
import Content from './list.js';
import Cards from './Cards.jsx'; 
import './Seen.css'

function Seen() {
    return (
        <>
            <div className="Seen-top">
                <h1>As seen on</h1>
            </div>
            <div className="Seen-bottom">
                {Content.map((item, index) => (
                    <Cards key={index} {...item} />
                ))}
            </div>
        </>
    );
}

export default Seen;
