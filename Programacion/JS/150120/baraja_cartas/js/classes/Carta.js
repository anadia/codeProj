function Carta(palo, numero){
	
	this.palo = palo;
	this.numero = numero;


	Carta.prototype.setPalo = function(palo){
			this.palo = palo;
	}

	Carta.prototype.setNumero = function(numero){
			this.numero = numero;
	}


	Carta.prototype.getPalo = function(){
			return this.palo;
	}

	Carta.prototype.getNumero = function(){
			return this.numero;
	}

}