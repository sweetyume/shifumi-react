import React, { Component } from 'react';
import Shifumi from './components/Shifumi';
import Header from './components/Header';
import './stylesheets/App.css';
import './stylesheets/Shifumi.css';
import './stylesheets/Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Shifumi/>
      </div>
    );
  }
}

export default App;
