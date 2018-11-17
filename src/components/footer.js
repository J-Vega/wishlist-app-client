import React from 'react';

import "./footer.css";

export default class Footer extends React.Component {
    

    render() {
        
        return (
            <div className="footer">
                <a href="/"><img src={'icon.jpg'} className="footer-icon"/></a>
                <p>Jonathan Vega</p>
                <p>License: MIT</p>
            </div>
        );
    }
}