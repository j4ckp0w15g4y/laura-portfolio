import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Print from './components/Print/Print'
import Digital from './components/Digital/Digital'
import About from './components/About/About'
import Div100vh from 'react-div-100vh'


import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {    
  return (
    <Div100vh>
    <div className="App">
      <header>
        <Header />
      </header>

      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/print" component={Print} />
        <Route path="/digital" component={Digital} />
      </Switch>    
    </div>
    </Div100vh>
  );
  }
}

export default App;
