function Lista(jLista){
	this.productos = new Array();
	
	if (jLista){
		let jProductos = jLista.productos;
		
		for (let jProducto of jProductos){
			let p = new Producto(jProducto);
			this.productos.push(p);
		}
	}
	
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
	
	Lista.prototype.toJSONObject = function (){
		let jLista = {};
		
		let jProductos = new Array();
		
		for (let producto of this.productos) {
			jProductos.push(producto.toJSONObject());
		}
		
		jLista.productos = jProductos;
		
		return jLista;
	}
	
}