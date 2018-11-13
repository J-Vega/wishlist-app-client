import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <div className="info-container">
        <p className="info-header">
            UNICART 
            <br/>The only stop you need to browse and shop!
        </p>
        <p className="info-header">
            
        </p>
        <p className="description">A more convenient way to shop online!</p>
        <p className="description">Find product and keep them all in one place.</p>
        <p className="description">Use one search bar to look up Walmart, Best Buy, and Etsy (with more to come)!</p>
        {/* <p className="description">Use one search bar to browse through Walmart, Best Buy, and Etsy (more to come)! Create an account to manage a wishlist with multiple categories without having to navigate to every website!</p> */}
    </div>
  );
}