function PoligonoPuro(lado,diagonal, area, color, nlados, longitudLado){
	PoligonoPuro.call(lado,diagonal, area, color);
	
	this.color = color;
	this.nlados = 4;
	
	PoligonoPuro.prototype.getArea = function(){
		return this.nlados;	
	}
	PoligonoPuro.prototype.getNlados = function(){
		return this.nlados;	
	}
    
    PoligonoPuro.prototype.getLongitudLado = function(){
		return this.longitudLado;	
	}

	PoligonoPuro.prototype.setNlados = function(nlados){
		this.nlados = nlados;	
    }
    PoligonoPuro.prototype.setLongitudLado = function(longitudLado){
		this.longitudLado = longitudLado;	
	}
	
}