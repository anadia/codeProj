//clase Lista
function Lista (){
	//pasar parametros a los atributos es constructor
	this.products = new Array();

	
	//metodos
	Lista.prototype.addProduct = function(producto){
		this.products.push(producto);
	}

	Lista.prototype.removeProduct = function(producto){
		let posicion = -1;
		for(let i =0; i < this.products.length && posicion ==-1; i++){
			if (this.products[i].getName() == producto.getName()){
				posicion =i;
			}
		}
		if (posicion != -1){
			
				this.products.splice(posicion,1);
		}
	}
	
	Lista.prototype.getProducts = function (){
			return this.products;
	}
}