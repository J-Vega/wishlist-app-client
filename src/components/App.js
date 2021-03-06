import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import './App.css';

import TopNav from './top-nav';
import SearchForm from './searchform';
import InfoSection from './info-section';
import RegistrationPage from './registration-page';

import Footer from './footer';
import {refreshAuthToken} from '../actions/auth';


export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopNav />
          <Route exact path="/" component={InfoSection} />
          <Route exact path="/" component={SearchForm}/>
          <Route exact path="/register" component={RegistrationPage} />
          <Footer/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
