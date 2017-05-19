import React, { Component } from 'react';
import CardExampleWithAvatar from '../card/Card';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className='Container'>
        <p className="Container-intro">
          To get started, edit <code>src/Container.js</code> and save to reload.
        </p>
        <CardExampleWithAvatar />
      </div>
    );
  }
}

export default Container;
