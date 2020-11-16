import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Print from './components/Print/Print'
import Digital from './components/Digital/Digital'
import About from './components/About/About'

import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {    
  return (
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
  );
  }
}

export default App;
