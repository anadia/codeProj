//clase Producto
function Producto(jProduct, nombre, cantidad){ // parametros de la clase Producto
	//constructor de la clase producto:
	//en el constructor se le asignan los valores iniciales que se reciben
	//en los parámetros (los del paréntesis) y se asignan a los atributos
	//(aquellos que tienen "this.")
	
	if (jProduct) {
		this.nombre = jProduct.nombre;
		this.cantidad = jProduct.cantidad;
		this.cogido = jProduct.cogido;
	}
	else {
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.cogido = false;
	}
	
	Producto.prototype.getNombre = function (){
		return this.nombre;
	}
	
	Producto.prototype.setNombre = function (nombre){
		this.nombre = nombre;
	}
	
	Producto.prototype.getCantidad = function (){
		return this.cantidad;
	}
	
	Producto.prototype.setCantidad = function (cantidad){
		this.cantidad = cantidad;
	}
	
	Producto.prototype.coger = function (){
		this.cogido = true;
	}
	
	Producto.prototype.devolver = function (){
		this.cogido = false;
	}
	
	Producto.prototype.verEstado = function (){
		return this.cogido == true ? "Ya lo tengo" : "Aún no lo tengo";
	}
	
	Producto.prototype.toJSONObject = function(){
		let jProduct = {};
		
		jProduct.nombre = this.nombre;
		jProduct.cantidad = this.cantidad;
		jProduct.cogido = this.cogido;
		
		return jProduct;
	}
}