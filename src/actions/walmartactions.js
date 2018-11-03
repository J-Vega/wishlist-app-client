import {API_BASE_URL} from "../config";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const fetchWalmartProducts = searchTerm => dispatch => {
  console.log("Fetching walmart api for " + searchTerm);
  
    // dispatch(fetchProductsBegin());
    fetch(`${API_BASE_URL}/Walmart/Listings/?searchTerm=${searchTerm}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(fetchWalmartSuccess(data));
      })
      .catch(error => dispatch(fetchWalmartFailure(error)));
  
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const FETCH_WALMART_BEGIN   = 'FETCH_WALMART_BEGIN';
export const fetchWalmartBegin = () => ({
  type: FETCH_WALMART_BEGIN
});

export const FETCH_WALMART_SUCCESS = 'FETCH_WALMART_SUCCESS';
export const fetchWalmartSuccess = (products) => ({
  type: FETCH_WALMART_SUCCESS,
  payload: {products}
});

export const FETCH_WALMART_FAILURE = 'FETCH_WALMART_FAILURE';
export const fetchWalmartFailure = error => ({
  type: FETCH_WALMART_FAILURE,
  payload: { error }
});