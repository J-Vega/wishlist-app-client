import React from 'react';

import './searchresults.css';

export default function SearchResults({result}) {
	console.log(result);
	
	return(
		<div>
			<div className="tab">
			  <button className="tablinks" id="defaultOpen">Walmart</button>
			  <button className="tablinks">Best Buy</button>
			  <button className="tablinks">Etsy</button>
			</div>

			
			<div id="Walmart-Tab" className="tabcontent">
			  <h3>Walmart Results</h3>
			  <div className='js-search-results-WALMART'>
					{ 
						!result.length ? '' : 
						result[0].products.map(e => (
							<div key={e.url}>
								<div className="listing-name">{e.name}</div>
								<div>Add to wishlist</div>
								<div className="listing-price">$ {e.regularPrice}</div>
								<div className="listing-price">$ {e.regularPrice}</div>
								<img src={e.image}/>

							</div>
						))
					}
				</div>
			</div>

			<div id="BestBuy-Tab" className="tabcontent">
			  <h3>Best Buy Results</h3>
			  <div className='js-search-results-BESTBUY'></div>
			</div>

			<div id="Etsy-Tab" className="tabcontent">
			  <h3>Etsy Results</h3>
			  <div className='js-search-results-ETSY'></div>
			</div>

		</div>
	);

}