function Altavoz(){
	this.encendido = false;
	this.volumen = 0;
	
	Altavoz.prototype.encender = function(){
		this.encendido = true;
		this.volumen = 20;
	}
	
	Altavoz.prototype.apagar = function(){
		this.encendido = false;
		this.volumen = 0;
	}
	
	Altavoz.prototype.getVolumen = function(){
		return this.volumen;
	}
	
	Altavoz.prototype.subirVolumen = function(){
		if (this.encendido && this.volumen < 100) {
			this.volumen++;
		}
	}
	
	Altavoz.prototype.bajarVolumen = function(){
		if (this.encendido && this.volumen > 0) {
			this.volumen--;
		}
	}
	
	Altavoz.prototype.setVolumen = function(volumen){
		if (this.encendido && volumen >= 0 && volumen <= 100) {
			this.volumen = volumen;
		}
	}
	
	Altavoz.prototype.mute = function(){
		if (this.encendido) {
			this.volumen = 0;		
		}
	}
	
	Altavoz.prototype.print = function(){
		//let estado = this.encendido == true ? "Encendido" : "Apagado";
		//return "El altavoz está " + estado + " y su volumen es de " + 
		//	this.volumen;
		return "El altavoz está " + 
			(this.encendido ? "Encendido" : "Apagado") + 
			" y su volumen es de " +  this.volumen;
	}
	
	
}