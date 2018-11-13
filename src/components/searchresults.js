import React from 'react';
import CategoryDropdown from './categorydropdown';
import './searchresults.css';
import WishLists from './wishlist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



import {API_BASE_URL} from '../config';


class SearchResults extends React.Component{
	constructor(props){
      super(props);
      this.state = {
        isButton: false,
        isWish: false,
        gift: [],
        grocer: [],
        events: [],
        others: []
      }
      this.wishRouter = this.wishRouter.bind(this);
	}
	
	

	wishRouter(e){
        e.preventDefault();
        let wishPack = {
            name: e.target.dataset.name,
			price: e.target.dataset.price,
			msrp:e.target.dataset.msrp,
            image: e.target.dataset.image,
            url: e.target.dataset.url
        }

        if(e.target.dataset.wish === "gift")   {
			this.addToList(wishPack, e.target.dataset.wish);
            this.setState(
                {gift: this.state.gift.concat(wishPack)},
                () => {console.log('Gift list now: ', this.state.gift)}
            );
        }

        if(e.target.dataset.wish === "grocer") {
			this.addToList(wishPack, e.target.dataset.wish);
            this.setState(
                {grocer: this.state.grocer.concat(wishPack)},
                () => {console.log('Grocery list now: ', this.state.grocer)}
            );
                        
        }

        if(e.target.dataset.wish === "events") {
			//e.target.dataset.wish = Category for fetch request
			this.addToList(wishPack, e.target.dataset.wish);
            this.setState(
				{
					events: this.state.events.concat(wishPack)
				},
                () => {console.log('Events list now: ', this.state.events)}
            );
                        
        }

        if(e.target.dataset.wish === "others") {
			this.addToList(wishPack, e.target.dataset.wish);
            this.setState(
                {others: this.state.others.concat(wishPack)},
                () => {console.log('Others list now: ', this.state.others)}
            );
                        
        }

	}
	
	addToList(itemData, category){
		console.log(itemData);
		//5bc91e143d799d3ae4f0ce41    ******Need to obtain wishlist ID   
		//	OR   update db by locating wishlist by username and category
		let itemPrice = `$${itemData.price}`;
		if(itemPrice === undefined) {
			console.log("Sale price is null, using msrp instead");
			itemPrice=`$${itemData.msrp}`;
		};
		if(itemPrice === undefined){
			console.log("MSRP is undefined as well! Set price to N/A");
			itemPrice="N/A";
		}
		
		fetch(`${API_BASE_URL}/Wishlist/User/${window.localStorage.userName}/${category}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
				
				"category":category,
				"name":`${itemData.name}`,
				"price":`${itemData.price}`,
				"imageUrl":`${`${itemData.image}`}`,
				"link":`${itemData.url}`
            }) 
        })
	}

	render(){



		return(
	
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
						// !this.props.results['walmartResults'].length ? '' : 
						// this.props.results['walmartResults'].map(i => (
						!this.props.results["walmartResults"].length ? '' : 
						this.props.results["walmartResults"].map(i => (
							
							<div className="item-container" key={i.itemId}>
								<div className="image-container">
									<img className="image" src={i.mediumImage} alt={i.name}/>
								</div>
								<div className="product-info-container">
									<p className="name">{i.name}</p>
									<div className="price">$ {i.salePrice}</div>
									<button className="listing-url" href={i.productUrl}>Buy Now!</button>
									
									<CategoryDropdown data={i} clickHandler={this.wishRouter}/>

									
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
										<img className="image" src={e.image} alt={e.name}/>
									</div>
									<div className="product-info-container">
									<a className="name" href={e.url}>{e.name}</a>
									<div className="price">$ {e.regularPrice}</div>

									<CategoryDropdown data={e} clickHandler={this.wishRouter}/>
									<button className="listing-url" href={e.url}>Buy Now!</button>
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
								<div key={e.url}>
									<div className="listing-name">{e.title}</div>
									<div className="listing-price">$ {e.regularPrice}</div>
									
									<CategoryDropdown data={e} clickHandler={this.wishRouter}/>


									<a className="listing-url" href={e.url}>Buy Now!</a>
								</div>
							))
						}
					</div>
				</TabPanel>
				<TabPanel>
					<WishLists wishes = {this.state.gift} />
				</TabPanel>
				
				</Tabs>
		
			)
	}
}
			

export default SearchResults;