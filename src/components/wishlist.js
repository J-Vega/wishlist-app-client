import React from 'react';

import Listing from './productlisting';

// import 'wishlist.css';

export default function WishList({wishes}) {
	return(
		<div className="wishlist">
			<h2>WISHLIST</h2>
			<ul className="list">
				<li className="list-wrapper">
					{
						wishes.map(i => (
							<div>
								<div className="category">{i.text}</div>
								<div className="name">{i.name}</div>
								<div className="price">$ {i.salePrice}</div>
								<img className="image" src={i.image} alt={i.name}/>
								<a className="listing-url" href={i.productUrl}>Buy Now!</a>
							</div>
						))
					}
				</li>
			</ul>

			
		</div>


	);

}