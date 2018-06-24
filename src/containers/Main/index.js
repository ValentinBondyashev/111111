import React, { Component } from 'react';
import styles from './index.scss';
import { connect } from 'react-redux';  

class Main extends Component {
  render() { 
    return (
        <div className="Main">
          <h1>Hello</h1>
        </div>
    );
  }
}

function mapStateToProps(state){
  return{ 

  }
}

function mapDispatchTopProps(dispatch){
  return{ 
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Main);
