
import React from 'react';
import CategoryDropdown from './categorydropdown';
import './searchresults.css';
import WishLists from './wishlist';

export default class SearchResults extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      saveWishes: []
    };
		this.saveWish = this.saveWish.bind(this);
  }

  componentDidmount(){
  	this.setState({
  		saveWishes: []
  	})
  }

  saveWish(e){
  	e.preventDefault();

  	this.setState({
  		saveWishes: this.state.saveWishes.concat(
  			{
  				name: e.target.dataset.name,
  				price: e.target.dataset.price,
  				image: e.target.dataset.image
  			}
  		)
  	})
  }

  render(){
		return(
			<div>
				<div className="tab">
				  <button className="tablinks" id="defaultOpen">Walmart</button>
				  <button className="tablinks">Best Buy</button>
				  <button className="tablinks">Etsy</button>
				</div>

				
				<div id="BestBuy-Tab" className="tabcontent">
				  <h3>BestBuy Results</h3>
				  <div className='js-search-results-BESTBUY'>
						{ 
							// !result.length ? '' : 
							// result[0].map(e => (
							// 	<div key={e.url}>
							// 		<div className="name">{e.name}</div>
							// 		<div className="price">$ {e.regularPrice}</div>
							// 		<img className="image" src={e.image} alt={e.name}/>

							// 		{/* CALL ACTION ON CLICK, THIS SHOULD ONLY DISPLAY WHEN LOGGED IN */}
							// 		<button>ADD TO WISHLIST</button>
							// 		<CategoryDropdown/>

							// 		<a href={e.url}>Buy Now!</a>

							// 	</div>
							// ))
						}
					</div>
				</div>

				<div id="Walmart-Tab" className="tabcontent">
				  <h3>Walmart Results</h3>
				  <div className='js-search-results-WALMART'>
					{ 
							!this.props.result.length ? '' : 
							this.props.result.map(i => (
								<div key={i.url}>
									<div className="name">{i.name}</div>
									<div className="price">$ {i.salePrice}</div>
									<img className="image" src={i.mediumImage} alt={i.name}/>

									<button onClick={this.saveWish} 
										data-name={i.name} 
										data-price={i.price}
										data-image={i.mediumImage}
										>ADD TO WISHLIST</button>
									<CategoryDropdown />


									<a className="listing-url" href={i.productUrl}>Buy Now!</a>
								</div>
							))
						}
					
					</div>
				</div>

				<div id="Etsy-Tab" className="tabcontent">
				  <h3>Etsy Results</h3>
				  <div className='js-search-results-ETSY'>
					{ 
							// !result.length ? '' : 
							// result[2].map(e => (
							// 	<div key={e.url}>
							// 		<div className="listing-name">{e.title}</div>
							// 		<div className="listing-price">$ {e.regularPrice}</div>

									
							// 		<button>ADD TO WISHLIST</button>
							// 		<CategoryDropdown/>


							// 		<a className="listing-url" href={e.url}>Buy Now!</a>
							// 	</div>
							// ))
						}
					</div>
				</div>
				<WishLists wishes = {this.state.saveWishes} />
			</div>
		);
  	
  }

}