import React, { Component } from 'react';
import ProdcutCard from '../card/Card';

class CardList extends Component {
	constructor(props){
		super(props);

		this.setDefaultProps = {
			productsList: {}
		}
	}

	render () {
		const cardList = this.props.productsList.map((item)=> (
			<ProdcutCard
				avatarImg = {item.commerceAvatar}
				avatarTitle = {item.commerceName}
				vaterSubTitle = ''
				overlayTitle = ''
				overlaySubTitle = ''
				cardTitle = {item.productName}
				cardSubTitle = ''
				description = {item.productDescription}
				chartAction =  ''
				/>
			));

		return (
			<div className="CardList">
					{cardList}
		  </div>
      )
	}
}

export default CardList;