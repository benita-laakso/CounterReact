import React, { Component } from 'react';
import './App.css';
import  Header from'./header/header.js';
import  Footer from'./Footer/Footer.js';
import  Main from'./Main/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
<Header/>
<Main/>
<Footer/>
      </div>

    );
  }
}

export default App;
