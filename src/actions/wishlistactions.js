import {API_BASE_URL} from "../config";

export const addToWishlist = (product) => dispatch => {
    fetch(`${API_BASE_URL}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'        
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(response => {
     console.log("Added Item to wishlist!");
    })
    .catch(error => console.log(error))
  }

  const ADD_SUCCESS = 'ADD_SUCCESS'
  export const addToWishlistSuccess = product => ({
    type: addToWishlistSuccess,
    product
  })