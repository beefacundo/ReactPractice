import React, { Component } from 'react';
import CardExampleWithAvatar from '../card/Card';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className='Container'>
        <CardExampleWithAvatar />
      </div>
    );
  }
}

export default Container;
