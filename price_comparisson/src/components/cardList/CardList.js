import React, { Component } from 'react';

class CardList extends Component {
	render () {
		const CardList = this.CardList.map((item)=> (
			<Card
				avatarImg = {item.avatarImg}
				avatarTitle = {item.avatarTitle}
				avaterSubTitle = {item.avaterSubTitle}
				overlayTitle = {item.overlayTitle}
				overlaySubTitle = {item.overlaySubTitle}
				cardTitle = {item.cardTitle}
				cardSubTitle = {item.cardSubTitle}
				description = {item.description}
				chartAction =  {chartAction}
				/>
			));
		return (
			<div className="CardList">

		    </div>
        )
	}
}

export default CardList;