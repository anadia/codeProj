function Cuadrado(color, lado){
	Paralelogramo.call(this, color, lado, lado);
}

Cuadrado.prototype = Object.create(Paralelogramo.prototype);
Cuadrado.prototype.constructor = Cuadrado;