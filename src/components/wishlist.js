import React from 'react';

import Listing from './productlisting';

import 'wishlist.css';

export default function WishList() {
	return(
		<div className="wishlist">
			<ul className="list">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
			</ul>

			<ul className="list">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
				<li className="list-wrapper">
					<Listing />
				<li className="list-wrapper">
			</ul>
		</div>


	);

}