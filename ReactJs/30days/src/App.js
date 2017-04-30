import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerForm from './CustomerForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FormHeading from './FormHeading'
class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <section className="container App-Body">
        <FormHeading/>
          <CustomerForm/>
        </section>      
      </div>
      </MuiThemeProvider>
     
    );
  }
}

export default App;
