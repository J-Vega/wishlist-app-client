import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../actions/walmartactions';

const initialState = {
    fetchTry: false,
    items: [],
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PRODUCTS_BEGIN) {
        console.log('Trying to get walmart api', action, state);
        return Object.assign({}, state, {
            fetchTry: true
        });
    } else if (action.type === FETCH_PRODUCTS_SUCCESS) {
        console.log('Setting the fetched data', state);
        return Object.assign({}, state, {
            item: action.payload
        });
    } else if (action.type === FETCH_PRODUCTS_FAILURE) {
        console.log('walmart api comm. failed', state);
        return Object.assign({}, state, {
            error: action.payload.error,
        });
    } 
    return state;
}