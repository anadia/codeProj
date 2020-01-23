//ClaseProducto
function Producto (name,quantity){
	this.name = name;
	this.quantity = quantity;
	
	//metodos
	Producto.prototype.getName = function(){
		return this.name;
	}
	
	Producto.prototype.setName= function(name){
		this.name = name
	}
	
	
	Producto.prototype.setQuantity = function (quantity){
		this.quantity = quantity
	}
	
	Producto.prototype.getQuantity = function(){
	return this.quantity;
	}
	
	Producto.prototype.checked = function(){
		this.checked = true;
	}

	Producto.prototype.unchecked = function(){
	this.checked = false;
	}
	
	Producto.prototype.checkList = function(){
	return this.checked == true ?"I have it": "I dont have";
	}
}
.,,,,,,,,,,,,,,
nn