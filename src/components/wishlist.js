import React from 'react';
import { connect } from "react-redux";
import store from '../store';
import {wishListActions} from '../actions/wishlistactions';
import {API_BASE_URL} from '../config';
import './wishlist.css';

export class Wishlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			wishlist: []
		};	
	}

	// componentDidMount(){
	// 	if(window.localStorage.userName){
	// 		this.props.dispatch(wishListActions(window.localStorage.userName));
	// 	}
	// }

	deleteCategory(category){
		if(window.confirm(`Would you like to delete category ${category} and everything inside this list?`)){

			window.alert(`Deleted category!`);

		fetch(`${API_BASE_URL}/Wishlist/User/${window.localStorage.userName}/Category/${category}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(window.location.reload());

	}
	
	  
}

	render(){
		console.log(this.props);
		const userWishlist = this.props.wishlist.map((i, index) => (		
			<div key={i.category + index}>
				<h3 className="category">Category: {i.category}</h3>
				<div><button onClick={() => {this.deleteCategory(i.category)}}>X</button></div>
				
				{
					i.items.map(j => (
						<div key={j._id + j.created} className="wishlist-item-container">
							<div className="wishlist-name">{j.name}</div>
							<div className="wishlist-price">${j.price}</div>
							<img className="wishlist-image" src={j.imageUrl} alt={j.name}/>
							<a className="wishlist-listing-url" href={j.link}>Buy Now!</a>
						</div>
					))
				}
		
			</div>	
		));

		return(
				<div className='user-wishlist'>
					<h3>My Wishlist</h3>
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
	wishlist: state.wishlist.wishlist
})

export default connect(mapStateToProps)(Wishlist);