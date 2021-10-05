import React, { Component} from 'react';
import './App.css';
import 'whatwg-fetch';
import Intro from '../intro';
import Series from '../../container/series/series';


class App extends Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome</p>
        </header>
        <Intro message="series list"/>
        <Series />
      </div>
    );
  }
}

export default App;
