import {
    FIND_WISHLIST_BEGIN,
    FIND_WISHLIST_SUCCESS,
    FIND_WISHLIST_FAILURE,
    DELETE_WISHLIST_SUCCESS
} from '../actions/wishlistactions';

const initialState = {
    wishlist: [],
    loading: false,
    error: null
};

export default function wishlistReducer(state = initialState, action) {

    switch (action.type) {
        case FIND_WISHLIST_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FIND_WISHLIST_SUCCESS:

            console.log(action.wishlist);
            return Object.assign({}, state, {
                wishlist: initialState,
                
                wishlist: [
                    ...state.wishlist, {
                        category: action.wishlist.category,
                        items: action.wishlist.items
                    }
                ],
                loading: false
            });

        case FIND_WISHLIST_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        case DELETE_WISHLIST_SUCCESS:

            console.log(action);
            return Object.assign({}, state, {
                wishlist: [
                    ...state.wishlist, {
                        category: action.wishlist.category,
                        items: action.wishlist.items
                    }
                ],
                loading: false
            });

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}