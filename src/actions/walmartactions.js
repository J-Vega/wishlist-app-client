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
        dispatch(fetchProductsSuccess(data));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {products}
});

export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});