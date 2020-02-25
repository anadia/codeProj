/* function Baraja (name){
	this.name =name;
	this.palo = Math.floor((Math.random() * 4) + 1);
	this.posicion = Math.floor((Math.random() * 40) + 1);
	this.repartida = false;
	 */


	 function Baraja(cartasBastos,cartasOros,cartasCopas,cartasEspadas){

		this.cartasBastos = cartasBastos;
		this.cartasOros =cartasOros;
		this.cartasCopas=cartasCopas;
		this.cartasEspadas=cartasEspadas;

		//metodos
	Baraja.prototype.crearBaraja = function(){
		let barajaCompleta = new Array (this.cartasBastos,this.cartasOros,this.cartasCopas,this.cartasEspadas);
		return barajaCompleta;
	}

	Baraja.prototype.barajar = function(){
		this.palo=Math.floor((Math.random() * 4) + 1);
		this.posicion= Math.floor((Math.random() * 40) + 1);
	}
	
	Baraja.prototype.getInfo = function(){
		return Baraja;
	}	
	
	Baraja.prototype.setRepartir = function(posicion){
		this.repartida = true;
	}	
	
	Baraja.prototype.getCarta = function(){
		console.log("ẗoma carta");
		return Baraja[this.palo][this.posicion];
	}
	
	Baraja.prototype.barajarCartas = function (){
		
	}
	
}