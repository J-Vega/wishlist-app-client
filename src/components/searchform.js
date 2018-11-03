import React, {Component} from 'react';
import { connect } from "react-redux";

import { fetchWalmartProducts } from "../actions/walmartactions";
import { fetchEtsyProducts } from "../actions/etsyactions";
import { fetchBestBuyProducts } from "../actions/bestbuyactions";
import './searchform.css';

const {API_BASE_URL} = require('../config');

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      resultObj:[]
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   event.preventDefault();
  //   console.log("Searching...")
  //   //dispatch 3 separate actions
  //   //dispatch action then have reducer => data from redux state using connect method utilize mapstateprop
  //   let apiUrls = [
  //     `${API_BASE_URL}/Walmart/Listings/?searchTerm=macbook`,
  //     `${API_BASE_URL}/BestBuy/Listings/?searchTerm=macbook`,
  //     `${API_BASE_URL}/Etsy/Listings/?searchTerm=macbook`
  //     ]
  //   Promise.all(apiUrls.map(url =>
  //     fetch(url).then(response => response.json())
  //   ))
  //   //if data.canonical exists...do this if not it's walmart
  //   .then(data => {
  //     console.log(...data)
  //   })
  //   .catch(err => console.log(err));
  //   };

  //Update text value to use when dispatching fetch requests
  updateInputValue(evt){
    this.setState({
      inputValue: evt.target.value
    })
  }

  render(){
    	return (
    		<div className="row">
            {/* <form className="js-search-form" onSubmit={this.handleSubmit}> */}
            <form className="js-search-form" onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state.inputValue);
                this.props.dispatch(fetchWalmartProducts(this.state.inputValue))
                this.props.dispatch(fetchBestBuyProducts(this.state.inputValue))
                this.props.dispatch(fetchEtsyProducts(this.state.inputValue))}
              }>
              <div className ="col-1 search-container">
                  </div>
                  <div className ="col-2 search-container">
                  <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type="text" className ="js-query searchBar searchTerm" required></input>
                  </div>
                  <div className ="col-2 search-container">
              <button type ="submit" id= "searchButton" className ="searchButton">
                    Search Listings
                  </button>
                  </div>
            </form>   
        </div>
	);
}
 
}

const mapStateToProps = state => ({ 
  items: state
})

export default connect(mapStateToProps)(SearchForm)