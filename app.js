class Product{
	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class ui{
	addProduct(){

	}
	deleteProduct(){

	}
	showMessage(){

	}
}

// Doom EVENTS

document.getElementById('product-form')
	.addEventListener('submit', function(e) {
	const name = document.getElementById('name').value;
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	console.log(name, price, year);

// para inpedir que se carge nuevamente el navegador al undir el click
	e.preventDefault();

	console.log(new Product(name ,price, year));
})