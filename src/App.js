// <SignIn />
import Login from "./components/sign-in/Login"
import Navbar from './components/NavBar';
import Register from './components/sign-in/Register';
import Entreprise from './components/entreprise/Entreprise';
import Admin from './components/admin/Admin';
import ChefDelegation from './components/chefDelegation/chefDelegation';
import Home from './components/Home';


import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { connect } from 'react-redux';
import ListePresEntrepriseContainer from "./components/admin/ListePresEntreprise";


if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


class App extends Component {

  
  render() {
    const{user}=this.props
    return (
      <Router>
          <div>
            <Navbar/>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/list" component={ ListePresEntrepriseContainer } />
              <Route exact path="/" component={ Home } />
              <Route exact path="/entreprise" component={ Entreprise } />
              <Route exact path="/chefDelegation" component={ ChefDelegation } />
              <Route exact path="/admin" component={ Admin } />
          </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
})
const AppContainer=connect(mapStateToProps)(App)
export  default AppContainer
