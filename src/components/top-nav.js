import React from 'react';

import './top-nav.css';

export default function TopNav(){
	return(

		<nav>
		
			<div className ="topnav full-row">
				<div className ="col-4">
				<a href={"/"} className="active">UniCart</a>
				
				<form className="js-signin-form">
				    	<button type="submit signUpButton signup-link">Register</button>
				      <input type="text" placeholder="Username" name="username"></input>
				      <input type="text" placeholder="Password" name="psw"></input>
				      
				      <button type="submit signInButton">Login</button>
				</form>
				
					
				</div>
			</div>
		</nav>
	)
}