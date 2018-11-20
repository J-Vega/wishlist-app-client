import React, {Component} from 'react';
import { connect } from "react-redux";


import SearchResults from './searchresults';

import './searchform.css';

const {API_BASE_URL} = require('../config');


class SearchForm extends Component{
  constructor(){
    super();
    this.state = {
      inputValue: '',
      results: [],
      searchResults: {
        walmartResults: [],
        bestbuyResults: [],
        etsyResults: [],
        img: []
      }
      
    };
    this.search = this.search.bind(this);
  }

  updateInputValue(evt){
    this.setState({
      inputValue: evt.target.value
    })
  }

  search(e){
    e.preventDefault();

    fetch(`${API_BASE_URL}/Walmart/Listings/?searchTerm=${this.state.inputValue}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        results: data,
        searchResults: {
            ...this.state.searchResults, walmartResults: data
        }
      })
    })
    .catch(err => console.log(err));

    fetch(`${API_BASE_URL}/BestBuy/Listings/?searchTerm=${this.state.inputValue}`)
    .then(res => res.json())
    .then(data => {

      this.setState({
        results: data,
        searchResults: {
            ...this.state.searchResults, bestbuyResults: data
        }
      })
    })
    .catch(err => console.log(err));

    fetch(`${API_BASE_URL}/Etsy/Listings/?searchTerm=${this.state.inputValue}`)
    .then(res => res.json())
    .then(data => {

      this.setState({
        results: data,
        searchResults: {
            ...this.state.searchResults, etsyResults: data
        }
      })
    })
    .catch(err => console.log(err));
  
  };

  render(){
      return (
        <div className="row main-body">
            <form className="js-search-form" onSubmit={e => this.search(e)}>
             
              <div className ="col-2 search-container">
                  <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type="text" className ="js-query searchBar searchTerm" required></input>
              </div>
              <div className ="col-2 search-container">
                  <button type ="submit" id= "searchButton" className ="searchButton">
                    Search Listings
                  </button>
              </div>
            </form>
            <SearchResults className="search-results" results = {this.state.searchResults}/>   
        </div>
  );
 }
}

const mapStateToProps = state => ({ 
  items: state
})

export default connect(mapStateToProps)(SearchForm)