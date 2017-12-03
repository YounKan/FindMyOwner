import React, { Component } from 'react';
import './App.css';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
