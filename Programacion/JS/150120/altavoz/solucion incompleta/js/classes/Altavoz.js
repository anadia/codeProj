//incorrecto
function Altavoz(type){
	//pasamos parametros a los atributos en el constructor
	this.type = type;
	this.altavoces = new Array();
	//definimos los  metodos
	
	Altavoz.prototype.setType = function(type){
		this.type = type;
		
	}
	
	Altavoz.prototype.addType = function(type){
		this.altavoces.push(type);
		
	}
	
	Altavoz.prototype.getAltavoces = function(){
		return this.altavoces;
		
	}

	
	Altavoz.prototype.getType = function(){
		let text = "";
		switch(this.type){
			case Altavoz.FRONTAL:
				this.type;
				break;
			case Altavoz.LATERALLEFT:
				this.type;
				break;
			case Altavoz.LATERALRIGHT:
				this.type;
				break;
			case Altavoz.BACKLEFT:
				this.type;
				break;
			case Altavoz.BACKRIGHT:
				this.type;
				break;				
			default:
				text = "Error";
				break;
		}	
		
		return text;
	}
	
}

Altavoz.FRONTAL = 1;
Altavoz.LATERALLEFT  = 2;
Altavoz.LATERALRIGHT  = 3;
Altavoz.BACKLEFT  = 4;
Altavoz.BACKRIGHT  = 5;
