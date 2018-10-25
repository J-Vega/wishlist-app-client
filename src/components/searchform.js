import React from 'react';

import './searchform.css';

// const {API_BASE_URL} = require('./config');

import SearchResults from './searchresults.js';

export default class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("Searching...")
    //http://localhost:3000/Wishlist
    fetch(`https://api.bestbuy.com/v1/products((search=ipod))?apiKey=vrjst2v5zsgemp3jq44xwmz9&show=bestSellingRank,name,url,regularPrice,shortDescription,longDescription,image&pageSize=12&format=json`,{
      method: 'get',
      crossDomain:true,
      headers: {'Content-Type':'application/json'}
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      console.log(res);
      return res.json();
    });
  };

  render(){
	return (
		<div className="row">
        <form className="js-search-form" onSubmit={this.handleSubmit}>
          <div className ="col-1 search-container">
              </div>
              <div className ="col-2 search-container">
              <input type="text" className ="js-query searchBar searchTerm" placeholder="111-111-1111" required></input>
              </div>
              <div className ="col-2 search-container">
          <button type ="submit" id= "searchButton" className ="searchButton">
                Search Listings
              </button>
              </div>
        </form>   
        <SearchResults/>
    </div>




	);
}

}