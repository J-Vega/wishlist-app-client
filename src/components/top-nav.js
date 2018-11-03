import React from 'react';

import LogInForm from './login-form.js';

import './top-nav.css';

export default function TopNav(){
	return(
		<nav>
		
			<div className ="col-4 topnav full-row">
				
				<a href={"/"} className="active">UniCart</a>
				<LogInForm/>
			</div>
		</nav>
	)
}