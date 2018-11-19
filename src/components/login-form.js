import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {login} from '../actions/auth';

import {Redirect} from 'react-router-dom';

import './login-form.css';
import NavLink from 'react-router-dom/NavLink';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.loggedIn) {
            return <Redirect to="/" />
        }
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {window.alert("Incorrect Username or Password")}
                </div>
            );
        }
        return (
            <div>
       
            <form className="login-container js-signin-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    
                />
                <button className="signInButton signup-link" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>

                <NavLink to="/register" className="register-button">Register</NavLink>
            </form>
            
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export const LoginFormMap = connect(mapStateToProps)(LoginForm);

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginFormMap);