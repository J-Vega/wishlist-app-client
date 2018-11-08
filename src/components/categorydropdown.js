
import React from 'react'

import "./categorydropdown.css";

const CategoryDropdown = (props) => {
        console.log('re-render');
        const data = props.data;
        const clickHandler = props.clickHandler
        const wishes = [
                { wish:"gift", text:"Presents" },
                { wish:"grocer", text:"Groceries" },
                { wish:"events", text:"Events" },
                { wish:"others", text:"Other "}
            ];
        return (
            <div>
                <div className="category-dropdown-container">
                    <div className="buttons">
                        {
                            wishes.map(e => (
                              <div key={`${e.wish} ${data.itemId}`}>
                                <button
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
            </div>
        );
    }

export default CategoryDropdown;