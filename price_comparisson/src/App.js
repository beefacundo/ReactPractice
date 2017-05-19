import React, { Component } from 'react';

import Header from './components/header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
