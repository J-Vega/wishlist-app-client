import {API_BASE_URL} from "../config";

export const registerUser = (newUserInfo) => dispatch => {
    fetch(`${API_BASE_URL}/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'        
      },
      body: JSON.stringify(newUserInfo)
    })
    .then(res => res.json())
    .then(response => {
     console.log("Registered User");
    })
    .catch(error => console.log(error))
  }

  const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
  export const registerUserSuccess = user => ({
    type: registerUserSuccess,
    user
  })