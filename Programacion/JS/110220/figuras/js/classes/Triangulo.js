function Triangulo(color, base, altura) {
	Figura.call(this, color);
	this.base = base;
	this.altura = altura;
	
	Triangulo.prototype.calcularArea = function(){
		return (this.base * this.altura) / 2;
	}	
}

Triangulo.prototype = Object.create(Figura.prototype);
Triangulo.prototype.constructor = Triangulo;