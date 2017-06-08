import React, { Component } from 'react';
import CardList from '../cardList/CardList';
import './Container.css';

class Container extends Component {
	constructor(props){
		super(props);

	}

  render() {
  	return (
      <div className='Container'>
        <CardList productsList={this.props.productsList} />
      </div>
    );
  }
}

export default Container;
