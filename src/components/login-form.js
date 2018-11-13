import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Link, Redirect} from 'react-router-dom';

import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log('logging in.. ', values);
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
                    {this.props.error}
                </div>
            );
        }
        return (

       
            <form className="login-container"
                className="js-signin-form"
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
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="signInButton signup-link" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>

        );
    }
}

/*
Nov/4 comment
  - Need to mapStateToProp to send dynamic state to global
*/
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export const LoginFormMap = connect(mapStateToProps)(LoginForm);

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginFormMap);