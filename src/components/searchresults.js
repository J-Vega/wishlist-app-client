import React from 'react';
import CategoryDropdown from './categorydropdown';
import './searchresults.css';
import WishLists from './wishlist';
import {wishListActions} from '../actions/wishlistactions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import store from '../store';
import { API_BASE_URL } from '../config';


class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isButton: false,
			isWish: false,
			gift: [],
			MustHave: [],
			events: [],
			others: []
		}
		this.wishRouter = this.wishRouter.bind(this);
	}

	wishRouter(e) {
		e.preventDefault();

		let wishPack = {
			name: e.target.dataset.name,
			price: e.target.dataset.price,
			msrp: e.target.dataset.msrp,
			image: e.target.dataset.image,
			url: e.target.dataset.url
		}
			if (e.target.dataset.wish === "Other") {
				let newCategory = prompt("Enter a category you would like to add this item to:");
					if(newCategory !== null){
						this.addToList(wishPack, newCategory);
						window.alert(`Added item to wishlist: ${newCategory}!`);
						window.location.reload();
					}			
			}
		else{
			if(window.confirm(`Would you like to add ${wishPack.name} to your ${e.target.dataset.wish} wishlist?`)){
				
				window.alert(`Added item to wishlist: ${e.target.dataset.wish}!`);
				this.addToList(wishPack, e.target.dataset.wish);
				window.location.reload();
			}
		}

	}

	addToList(itemData, category) {
		console.log(itemData);
		
		let itemPrice = `$${itemData.price}`;
		if (itemPrice === undefined) {
			console.log("Sale price is null, using msrp instead");
			itemPrice = `$${itemData.msrp}`;
		};
		if (itemPrice === undefined) {
			console.log("MSRP is undefined as well! Set price to N/A");
			itemPrice = "N/A";
		}

		fetch(`${API_BASE_URL}/Wishlist/User/${window.localStorage.userName}/${category}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({

				"category": category,
				"name": `${itemData.name}`,
				"price": `${itemData.price}`,
				"imageUrl": `${`${itemData.image}`}`,
				"link": `${itemData.url}`
			})
		})
		.then(store.dispatch(wishListActions(window.localStorage.userName)));
	}



	render() {
		return (

			<Tabs className="tab">
				<TabList>
					<Tab className="tablinks" id="defaultOpen">Walmart</Tab>
					<Tab className="tablinks">Best Buy</Tab>
					<Tab className="tablinks">Etsy</Tab>
					<Tab className="tablinks">My Wishlist</Tab>
				</TabList>

				<TabPanel id="Walmart-Tab" className="tabcontent">
					<h3 className="results-header">Walmart Results</h3>
					<div className='js-search-results-WALMART'>
						{
							!this.props.results["walmartResults"].length ? '' :
								this.props.results["walmartResults"].map(i => (

									<div className="item-container" key={i.itemId}>
										<div className="image-container">
											<img className="image" src={i.mediumImage} alt={i.name} />
										</div>
										<div className="product-info-container">
											<p className="name">{i.name}</p>
											<div className="price">$ {i.salePrice}</div>
											<button className="listing-url" href={i.productUrl}>Buy Now!</button>
											<CategoryDropdown data={i} clickHandler={this.wishRouter} />
										</div>
									</div>
								))
						}

					</div>
				</TabPanel><TabPanel id="BestBuy-Tab" className="tabcontent">
					<h3 className="results-header">Best Buy Results</h3>
					<div className='js-search-results-BESTBUY'>
						{
							!this.props.results["bestbuyResults"].length ? '' :
								this.props.results["bestbuyResults"].map(e => (
									<div className="item-container" key={e.url}>
										<div className="image-container">
											<img className="image" src={e.image} alt={e.name} />
										</div>
										<div className="product-info-container">
											<a className="name" href={e.url}>{e.name}</a>
											<div className="price">${e.regularPrice}</div>
											<button className="listing-url" href={e.url}>Buy Now!</button>
											<CategoryDropdown data={e} clickHandler={this.wishRouter} />
										</div>
									</div>
								))
						}
					</div>
				</TabPanel><TabPanel id="Etsy-Tab" className="tabcontent">
					<h3 className="results-header">Etsy Results</h3>
					<div className='js-search-results-ETSY'>
						{
							!this.props.results["etsyResults"].length ? '' :
								this.props.results["etsyResults"].map(e => (
									<div className="item-container" key={e.name + e.url}>
										<div className="image-container">
											<img className="image" src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png"} alt={e.name} />
										</div>
										<div className="product-info-container">
											<div className="name">{e.title}</div>
											<div className="price">$ {e.price}</div>
											<button className="listing-url" href={e.url}>Buy Now!</button>
											<CategoryDropdown data={e} clickHandler={this.wishRouter} />
										</div>
									</div>
								))
						}
					</div>
				</TabPanel>
				<TabPanel>
					<WishLists/>
				</TabPanel>

			</Tabs>

		)
	}
}


export default SearchResults;