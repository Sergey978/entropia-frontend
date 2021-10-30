import React, { Component } from 'react';
import Header from '../header'
import ApiService from '../../services/api-service'

import {
  AboutPage,
  SignUpPage,
  LoginPage
} from '../pages';

import './app.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';



export default class App extends Component {

   apiService = new ApiService();
  state = {
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onSignUP = (data) => {
    
    this.apiService.postForm('/api/auth/register', data);
    
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <Header />
        <Switch>
        <Route path="/about" render={() => (
            <AboutPage />
          )} />


          <Route path="/login" render={() => (
            <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
          )} />

          <Route path="/signup" render={() => (
            <SignUpPage isLoggedIn={isLoggedIn} onSignUP={this.onSignUP} />
          )} />
        </Switch>
      </Router>
    );
  }
}



