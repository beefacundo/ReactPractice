import fecth from 'isomorphic-fetch';
/*
const ServiceClient = {

	getData() {
		fetch('/samana/product=all')
	    .then(function(response) {
	        if (response.status >= 400) {
	            throw new Error("Bad response from server");
	        }
	        console.log("facundo");
	        console.log(response.json());
	        return response.json();
	    /*})
	    .then(function(stories) {
	        console.log(stories);
	    });
  	}
	}
 */

const ServiceClient = {	
	async getData() {
	   	const response = await fetch('/samana/product=all');
	   	const data = await response.json();
	   	return data.data.products.data;
 	}
}

export default ServiceClient;