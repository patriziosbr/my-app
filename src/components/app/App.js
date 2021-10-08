import React, { Component} from 'react';
import './App.css';
import 'whatwg-fetch';
import Header from '../../container/Header';
import Main from '../../components/Main/routes'


class App extends Component {
  render (){
    return (
      <div className="App">
        <Header />
        <Main />
      </div>

    );
  }
}

export default App;
