
import React from 'react'

import "./categorydropdown.css";

const CategoryDropdown = (props) => {
        console.log('re-render');
        const data = props.data;
        const clickHandler = props.clickHandler
        const wishes = [
                { wish:"Presents", text:"Presents" },
                { wish:"Groceries", text:"Groceries" },
                { wish:"Event", text:"Event" },
                { wish:"Other", text:"Other"}
            ];
        return (
       
                <div className="category-container">
                    <p className="category-notification">Choose wishlist category:</p>
                    <div className="buttons">
                        {
                            wishes.map(e => (
                              <div key={`${e.wish} ${data.itemId}`}>
                                <button className="category-buttons"
                                    data-name={data.name} 
                                    data-price={data.salePrice}
                                    data-image={data.mediumImage}
                                    data-key={data.itemId}
                                    data-url={data.productUrl}
                                    data-msrp={data.msrp}
                                    data-wish= {e.wish}
                                    data-text={e.text}
                                    onClick={clickHandler}
                                >{e.text}</button>
                                </div>
                            ))
                        } 
                    </div>
                </div>

        );
    }

export default CategoryDropdown;