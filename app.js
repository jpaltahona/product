class Product{
	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI{
	addProduct(product){
	const productList =	document.getElementById('product-list');
	const element = document.createElement('div');
	element.innerHTML = `
	<div class="card text-center my-4">
		<div class="card-body">
			<strong>Product Name</strong>: ${product.name}
			<br>
			<strong>Product price</strong>: ${product.price}
			<br>
			<strong>Product year</strong>: ${product.year}

			<a class="btn btn-danger" name="delete">Delete</a>
		</div>
	</div>
	`;
	productList.appendChild(element);
	}

	resetFrom(){
		document.getElementById('product-form').reset();
	}

	deleteProduct(element){
		if ( element.name === 'delete') {
			element.parentElement.parentElement.parentElement.remove();
			this.showMessage('Eliminado satisfactoria mente','danger')
		}
	}

	showMessage(message, cssClass){
		const msj = document.createElement('div');
		msj.className = `alert alert-${cssClass} mx-4 w-50`;
		msj.appendChild(document.createTextNode(message));

		// mostrando en el DOOm
		const container = document.querySelector('.container');
		const app = document.querySelector('#app');

		container.insertBefore(msj, app);
		setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 3000);
	}
}


// Doom EVENTS

document.getElementById('product-form')
	.addEventListener('submit', function(e) {
	const name = document.getElementById('name').value;
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;

	e.preventDefault();
	const product = new Product(name, price, year);

	const ui = new UI();


	if (name === '' || price === '' || year === '') {
		return ui.showMessage('LLena los valores', 'warning');
	}

	ui.addProduct(product);
	ui.resetFrom();	
	ui.showMessage('producto agregado bien', 'success');

});

document.getElementById('product-list').addEventListener('click', function(e){
	const ui = new UI();
	ui.deleteProduct(e.target);
});