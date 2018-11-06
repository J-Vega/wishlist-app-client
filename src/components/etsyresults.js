import React from "react";
import { connect } from "react-redux";

import ProductListing from "./productlisting";
import CategoryDropdown from "./categorydropdown";

 
export default function EtsyResults(result) {
  console.log(result);
	// function handleClick(item, category){
	// 	console.log("Adding item to wishlist");
	// 	fetch(addToWishlist(item));
	// }

	return(
    <div id="Etsy-Tab" className="tabcontent">
			  <h3>Etsy Results</h3>
			  <div className='js-search-results-ETSY'>
				{ 
						!result.length ? '' : 
						result.map(i => (
							<div key={i.url}>
								<div className="name">Etsy Product</div>
								<div className="price">$100</div>
								<img className="image" src={i.mediumImage} alt={i.name}/>
		            <CategoryDropdown/>

								{/* CALL ACTION ON CLICK, THIS SHOULD ONLY DISPLAY WHEN LOGGED IN */}
								{/* <button 

								onClick={(this.props.handleClick(values =>
										this.onClick(values))}>
										
										ADD TO WISHLIST</button> */}


						


								<a className="listing-url" href={i.url}>Buy Now!</a>
							</div>
						))
					}
				
				</div>
			</div>
  )
}