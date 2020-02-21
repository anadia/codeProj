function Paralelogramo(color, base, altura){
	Figura.call(this, color);
	this.base = base;
	this.altura = altura;
	
	Paralelogramo.prototype.calcularArea = function(){
		return this.base * this.altura;
	}
	
	Paralelogramo.prototype.calcularPerimetro = function(){
		return 2 * this.base + 2 * this.altura;
	}
}

Paralelogramo.prototype = Object.create(Figura.prototype);
Paralelogramo.prototype.constructor = Paralelogramo;