import React, { Component } from 'react';
import styles from './App.scss';
import Login from "./Login";
import { connect } from 'react-redux';  
import loginAction, { checkAuthAction } from '../actions/auth'; 
import PrivateRoute from '../components/Routes/private-route';
import NoAuthRoute from '../components/Routes/no-auth-route';
import { HashRouter, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Main from '../containers/Main'


class App extends Component {
  componentWillMount(){
    this.props.checkAuthFunction();
  }

  render() { 
    return (
        <BrowserRouter>
        <div className="App">
            <Switch>
              <NoAuthRoute exact path='/' component={Login}/>
              <PrivateRoute path="/"  component={Main} />
            </Switch>
          {this.props.children}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return{ 

  }
}

function mapDispatchTopProps(dispatch){
  return{ 
    checkAuthFunction: () => {
      dispatch(checkAuthAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(App);
