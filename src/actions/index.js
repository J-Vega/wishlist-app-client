import {API_BASE_URL} from '../config';

export const fetchBoard = () => dispatch => {
    fetch(`${API_BASE_URL}/board`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            dispatch(fetchBoardSuccess(board));
        });
};