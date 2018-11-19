import React from 'react';
import {connect} from 'react-redux';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import LogInForm from './login-form.js';

import './top-nav.css';

export class TopNav extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		localStorage.removeItem("userName");
		clearAuthToken();
		window.location.reload();
	}

	render() {
		return(
			<nav>
				<div className ="row topnav">
					<a href={"/"} className="active">UniCart</a>
					{
						this.props.loggedIn ? <button className="logout-button" onClick={() => this.logOut()}>Log out</button> : <LogInForm/>
					}
					{
						this.props.loggedIn ? <p className="user-greeting">Welcome, {window.localStorage.userName}!</p> : <p className="user-greeting"></p>
					}

					

				</div>
			</nav>
		)
  }
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TopNav);