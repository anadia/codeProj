function Lista(){
	this.productos = new Array();
	
	Lista.prototype.addProduct = function(producto){
		this.productos.push(producto);
	}
	
	Lista.prototype.removeProduct = function(producto){
		let posicion = -1;
		for (let i = 0; i < this.productos.length && posicion == -1; i++){
			if (this.productos[i].getNombre() == producto.getNombre()){
				posicion = i;
			}
		}
		
		if (posicion != -1){
			this.productos.splice(posicion, 1);
		}
	}
	
	Lista.prototype.getProducts = function(){
		return this.productos;
	}
	
}