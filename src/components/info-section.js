import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <div className="info-container">
        <p className="info-header">
            UNICART 
        </p>
        <p className="info-sub-header">The only stop you need to browse and shop!</p>
        <img src={'logo.jpg'} alt="A woman shopping within an aisle containing products from Walmart, Amazon, and Etsy" className="main-image"/>

        <p className="info-header">
            
        </p>
        <p className="description">A more convenient way to window shop online!</p>
        <p className="description">Use one search bar to find product listings from Walmart, Best Buy, and Etsy (with more to come)!</p>
        <p className="description">Select a category to add the product to your wishlist to save it for later!</p>
        <p className="description">Ready to buy something on your list? Click on its 'Buy Now' button to go straight to its source!</p>
        {/* <p className="description">Use one search bar to browse through Walmart, Best Buy, and Etsy (more to come)! Create an account to manage a wishlist with multiple categories without having to navigate to every website!</p> */}
    </div>
  );
}