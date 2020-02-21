function circulo(lado,diagonal, area, color, radio){
	Poligono.call(lado,diagonal, area, color);
	
	this.radio = diagonal/2;

	
	Rectangulo.prototype.getRadio = function(){
		return this.radio;	
	};


	Rectangulo.prototype.setradio = function(radio){
		this.radio = radio;	
    }

	
}