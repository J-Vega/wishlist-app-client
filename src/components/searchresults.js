import React from 'react';

import './searchresults.css';

export default function SearchResults() {


	return(
		<div>
			<div className="tab">
			  <button className="tablinks" id="defaultOpen">Walmart</button>
			  <button className="tablinks">Best Buy</button>
			  <button className="tablinks">Etsy</button>
			</div>

			
			<div id="Walmart-Tab" className="tabcontent">
			  <h3>Walmart Results</h3>
			  <div className='js-search-results-WALMART'></div>
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