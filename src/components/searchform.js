import React, {Component} from 'react';
import { connect } from "react-redux";
import thunk from 'redux-thunk';
import $ from 'jquery';

import SearchResults from './searchresults';
import { fetchWalmartProducts } from "../actions/walmartactions";
import { fetchEtsyProducts } from "../actions/etsyactions";
import { fetchBestBuyProducts } from "../actions/bestbuyactions";
import './searchform.css';

const {API_BASE_URL} = require('../config');
const walAPI = 'cwd2qzamfg6f523deuwhuxec';
const YTAPI = 'AIzaSyAkcjnCcHDCNVjZXC28pvI8ur0GMxoAKTY';

class SearchForm extends Component{
  constructor(){
    super();
    this.state = {
      inputValue: '',
      result: []
    };
    this.search = this.search.bind(this);
  }

  //Update text value to use when dispatching fetch requests
  updateInputValue(evt){
    this.setState({
      inputValue: evt.target.value
    })
  }

  /*
  Nov/4 comment
    to get information: (Use Redux)
    bind below fn to onClick
    -- fix the async api call error !

    -- And need more "Reduce" files for each dispatching to use redux module
    -- take a look at a file: '/reducers/walreducer.js'
    --------------------------
    search(e){
      e.preventDefault();
      this.props.dispatch(fetchWalmartProducts(this.state.inputValue))
      this.props.dispatch(fetchBestBuyProducts(this.state.inputValue));
      this.props.dispatch(fetchEtsyProducts(this.state.inputValue));
    }
    ---------------------------
  */

  search(e){
    e.preventDefault();

    /*
    Nov/4 comment
      - why are you using the localhost url when getting api call from walmart?

      -it will occur following error:
      --SyntaxError: Unexpected token < in JSON at position 0

      -the below api call will return plain HTML code of its index.html
      -because the api call calling its localhost.
    */

    /*
    Nov/5 comment

    - Fetching does not work for walmart
    - However, the logic below is correct

    let apiUrls = [
      `//api.walmartlabs.com/v1/search?query=${this.state.inputValue}&format=json&apiKey=${walAPI}`
      // `${API_BASE_URL}/BestBuy/Listings/?searchTerm=macbook`,
      // `${API_BASE_URL}/Etsy/Listings/?searchTerm=macbook`
      ]
    Promise.all(apiUrls.map(url =>
      fetch(url)
      .then(res => res.json())
    ))
    .then(data => {
      this.setState({
        result: data
      })
    })
    .catch(err => console.log(err));
    */

    $.ajax({
      url: `//api.walmartlabs.com/v1/search?query=${this.state.inputValue}&format=json&apiKey=${walAPI}`,
      type: 'GET',
      dataType: 'jsonp'
    })
    .done( res => {
      console.log(res);
      this.setState({
        result: res.items
      })
    })
    .fail( res => {
      console.log("error", res);
    });
    
  };
  render(){
      return (
        <div className="row">
            {/* <form className="js-search-form" onSubmit={this.handleSubmit}> */}
            <form className="js-search-form" onSubmit={e => this.search(e)}>
              <div className ="col-1 search-container"></div>
              <div className ="col-2 search-container">
                  <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type="text" className ="js-query searchBar searchTerm" required></input>
              </div>
              <div className ="col-2 search-container">
                  <button type ="submit" id= "searchButton" className ="searchButton">
                    Search Listings
                  </button>
              </div>
            </form>
            <SearchResults result = {this.state.result}/>   
        </div>
  );
 }
}

const mapStateToProps = state => ({ 
  items: state
})

export default connect(mapStateToProps)(SearchForm)