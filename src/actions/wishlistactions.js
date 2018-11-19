import {API_BASE_URL} from "../config";

export const wishListActions = username => dispatch => {

  fetch(`${API_BASE_URL}/Wishlist/User/${username}`)
  .then(res => res.json())
  .then(data => {
  (data.map(i => {
    //console.log(i.wishlists.category);
    //console.log(...(i.wishlists.items));
    dispatch(findWishListSuccess(i.wishlists));
  }));
})
  .catch(error => console.log(error))
}


  // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
  export const FIND_WISHLIST_BEGIN = 'FIND_WISHLIST_BEGIN'
  export const findWishListBegin = wishlist => ({
    type: FIND_WISHLIST_BEGIN,
    wishlist
  });

  export const FIND_WISHLIST_SUCCESS = 'FIND_WISHLIST_SUCCESS'
  export const findWishListSuccess = wishlist => ({
    type: FIND_WISHLIST_SUCCESS,
    wishlist
  });

  export const FIND_WISHLIST_FAILURE = 'FIND_WISHLIST_FAILURE'
  export const findWishListFailure = wishlist => ({
    type: FIND_WISHLIST_FAILURE,
    wishlist
  });