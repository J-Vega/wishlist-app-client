import React from 'react';

import './productlisting.css';

export default function ProductListing(){
	const productName = "Xbox";
	const price = "300";

	return (
		<div className="listing">
			<h3>
				{productName}
			</h3>
			<p className="price">
				{price}
			</p>
		</div>
	);

}