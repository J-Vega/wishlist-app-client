import React from 'react';

import './searchform.css';

import SearchResults from './searchresults.js';

const {API_BASE_URL} = require ('../config');

export default class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resultObj: []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("Searching...") 
    const urls = [
      `${API_BASE_URL}/BestBuy/Listings/?searchTerm=macbook`,
      `${API_BASE_URL}/Walmart/Listings/?searchTerm=macbook`,
      `${API_BASE_URL}/Etsy/Listings/?searchTerm=macbook`

    ];
    let resultObj = [];
    Promise.all(urls.map(url => fetch(url)))
    .then(data => Promise.all(data.map(res => res.json())))
    .then(json => {
      this.setState({
        resultObj: json
      })
    });
    // .then(json => {
      // console.log('A: ', jsonA);
      // console.log('B: ', jsonB);
      // console.log('C: ', jsonC);
    // });
    // .then(a => console.log(a))
    // .catch(err => console.log(err));
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
        <SearchResults result={this.state.resultObj}/>
    </div>
	);
}

}