import React from 'react';
import { connect } from "react-redux";

import {wishListActions} from '../actions/wishlistactions';
import {API_BASE_URL} from '../config';
// import 'wishlist.css';

export class Wishlist extends React.Component{
	componentDidMount(){
		if(window.localStorage.userName){
			this.props.dispatch(wishListActions(window.localStorage.userName));
		}
	} 

	render(){
		
		
		const userWishlist = this.props.wishlist.map(i => (		
			<div key={i.peoductUrl + i.name}>

				{console.log(i)}
				<div className="category">{i.text}</div>
				<div className="name">{i.name}</div>
				<div className="price">$ {i.salePrice}</div>
				<img className="image" src={i.image} alt={i.name}/>
				<a className="listing-url" href={i.productUrl}>Buy Now!</a>
			</div>
			
		));

		return(
	
				<div className='user-wishlist'>
					<h3>{this.props.title}</h3>
					{ userWishlist }		
				</div>	
			)
	}
}
		
Wishlist.defaultProps= {
	title: "My Wishlist",
	wishlist: [{
		text:"Presents",
		name:"VIZIO 4K TV",
		salePrice:"200",
		
	}]
}
const mapStateToProps = state => ({ 
	wishlist: state.wishlist
})

export default connect(mapStateToProps)(Wishlist);


//				CURRENT VERSION

// export default function WishList({wishes}) {
// 	return(
// 		<div className="wishlist">
// 			<h2>WISHLIST</h2>
// 			<ul className="list">
// 				<li className="list-wrapper">
// 					{
// 						wishes.map(i => (
// 							<div>
// 								<div className="category">{i.text}</div>
// 								<div className="name">{i.name}</div>
// 								<div className="price">$ {i.salePrice}</div>
// 								<img className="image" src={i.image} alt={i.name}/>
// 								<a className="listing-url" href={i.productUrl}>Buy Now!</a>
// 							</div>
// 						))
// 					}
// 				</li>
// 			</ul>

			
// 		</div>


// 	);

// }