import React from 'react';

import './searchform.css';

import SearchResults from './searchresults.js';

export default class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ajax -> SearchResults
  searchAPI(){};

  handleSubmit(event){
    event.preventDefault();
    //http://localhost:3000/Wishlist
    fetch(`/Wishlist`,{
      method: 'get',
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