import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import LogInForm from './login-form.js';

import './top-nav.css';

export class TopNav extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		return(
			<nav>
				<div className ="col-4 topnav full-row">
					<a href={"/"} className="active">UniCart</a>


					{/*
						Nov/4 comment
			      - To have conditional appearing module:
			      -- It is recommened to use Regex if else
			      --(added a logout button)
					*/}


					{
						this.props.loggedIn ? <button onClick={() => this.logOut()}>Log out</button> : <LogInForm/>
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