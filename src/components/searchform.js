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
    event.preventDefault();
    console.log("Searching...")
    Promise.all([
      // fetch(`https://api.walmartlabs.com/v1/search?query=MACBOOK&format=json&apiKey=cwd2qzamfg6f523deuwhuxec&numItems=10`),
      fetch(`https://api.bestbuy.com/v1/products((search=ipod))?apiKey=vrjst2v5zsgemp3jq44xwmz9&show=bestSellingRank,name,url,regularPrice,shortDescription,longDescription,image&pageSize=12&format=json`),
      fetch(`https://api.bestbuy.com/v1/products((search=mac))?apiKey=vrjst2v5zsgemp3jq44xwmz9&show=bestSellingRank,name,url,regularPrice,shortDescription,longDescription,image&pageSize=12&format=json`),
      //nodemon server.js to enable CORS => returns [[PromiseValue]] array
      fetch(`http://localhost:3001/Walmart/Listings/?searchTerm=macbook`)
    ])
    .then(([a, b, c]) => {
      console.log('A: ', a);
      console.log('B: ', b.json());
      console.log('C: ', c.json());
    })
    .then(a => console.log(a))
    .catch(err => console.log(err));
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