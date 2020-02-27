class Carta{
	constructor(numero, palo){
		this._numero = numero;
		this._palo = palo;
		this._repartida = false;
	}
	get numero(){
		return this._numero;
	}
	set numero(numero){			
		this._numero = name;
	}
	get palo(){
		return this._palo;
	}
	set palo(palo){			
		this._palo = palo;
	}
	repartir(){
		this._repartida = true;
	}
	recoger(){
		this._repartida = false;
	}
	estaRepartida(){
		return this._repartida;
	}
	verDatos(){
		return this.numero + " - " + this.palo;
	}
}












