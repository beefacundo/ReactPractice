import React, { Component } from 'react';

import ServiceClient from './components/serviceClient/ServiceClient';

import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
				products: {},
				loading: true
		}
	}

	async componentDidMount() {
		const products = await ServiceClient.getData();
		this.setState({
			productsList: products,
			loading: false
		});
	}	

  render() {
  	let container = (
  		<div className="App">
	  		<Header />
	  		<Loading />
	  		<Footer />
	  	</div>
  		);
  	if (!this.state.loading){
  		container = (
	  			<div className="App">
	  				<Header />
	  				<Container productsList={this.state.productsList}/>
	  				<Footer />
	  			</div>
  			);
  	}
  	return container;
  }
}

export default App;
