function Rectangulo(color, base, altura){
	Paralelogramo.call(this, color, base, altura);
	
}

Rectangulo.prototype = Object.create(Paralelogramo.prototype);
Rectangulo.prototype.constructor = Rectangulo;