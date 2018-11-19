import { API_BASE_URL } from "../config";

//    GET USER WISHLIST

export const wishListActions = username => dispatch => {

  fetch(`${API_BASE_URL}/Wishlist/User/${username}`)
    .then(res => res.json())
    .then(data => {
      (data.map(i => {
        dispatch(findWishListSuccess(i.wishlists));
      }))
    })
    .catch(error => console.log(error))
}

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

//      DELETE CATEGORY

export const deleteWishlist = category => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/Wishlist/User/${window.localStorage.userName}/Category/${category}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
    })
    .then(() => {
      dispatch(deleteWishListSuccess(category));
    });
};

export const DELETE_WISHLIST_BEGIN = 'DELETE_WISHLIST_BEGIN'
export const deleteWishListBegin = wishlist => ({
  type: DELETE_WISHLIST_BEGIN,
  wishlist
});

export const DELETE_WISHLIST_SUCCESS = 'DELETE_WISHLIST_SUCCESS'
export const deleteWishListSuccess = wishlist => ({
  type: DELETE_WISHLIST_SUCCESS,
  wishlist
});

export const DELETE_WISHLIST_FAILURE = 'DELETE_WISHLIST_FAILURE'
export const deleteWishListFailure = wishlist => ({
  type: DELETE_WISHLIST_FAILURE,
  wishlist
});