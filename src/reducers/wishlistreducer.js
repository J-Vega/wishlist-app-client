import {
    FIND_WISHLIST_BEGIN,
    FIND_WISHLIST_SUCCESS,
    FIND_WISHLIST_FAILURE
} from '../actions/wishlistactions';

const initialState = {
    //state.products.items is here
    wishlist: [{
        text: "Category - Christmas",
        items: [
            {
                name: "Fridge",
                salePrice: "200",
                image: "pictureurl.com",
                productUrl: "google.com"
            }
        ]

    }],
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

            console.log(action.wishlist.items);
            return Object.assign({}, state, {
                wishlist: [
                    ...state.wishlist, {                    
                    items: action.wishlist    
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

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}