//incorrecto
function Volumen(volume){
	//pasamos parametros a los atributos en el constructor
	this.volume = volume;
	
	//definimos los  metodos
	
	Volumen.prototype.setOn = function(){
		this.powered = true;
		this.volume = 20;
		
	}
	
	Volumen.prototype.setOff = function(){
		this.powered = false;
		this.volume = 0;
		
	}
	
	Volumen.prototype.setVolume = function(volume){
		this.volume = volume;
		
	}
	
	Volumen.prototype.getVolume = function(){
		return this.volume;
		
	}
	
	Volumen.prototype.setUpVolume = function(){
		this.volume = volume +1;
		
	}
	
	Volumen.prototype.setDownVolume = function(){
		if (volume <=100){
			this.volume = volume -1;
		}
	}
	
	Volumen.prototype.setMute = function(volume){
		this.volume = 0;
		
	}

	
	Volumen.prototype.getInfo = function(){
		let text = "";
		switch(this.type){
			case Volumen.ENCENDIDO:
				text = "El Volumen esta encendido";
				break;
			case Volumen.APAGADO:
				text = "El Volumen esta apagado";
				break;
			default:
				text = "Error";
				break;
		}	
		
		return text;
	}
	
	
	
	
	
}

Volumen.ENCENDIDO = 1;
Volumen.APAGADO  = 0;