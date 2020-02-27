class Baraja{
	
	
	constructor(){
		this._cartas = this.crearBaraja();
	}
	
	crearBaraja(){
		const numeros = [1,2,3,4,5,6,7,10,11,12];
		const palos = ["oros", "espadas", "copas", "bastos"];
		let cartas = [];
		for (let palo of palos){
			for (let n of numeros){
				cartas.push(new Carta(n, palo));
			}
		}
		
		return cartas;
	}
	
	mostrarBaraja (){
		let texto = "";
		for (let carta of this._cartas){
			texto += carta.verDatos() + "\n";
		}			
		return texto;		
	}
	
	barajar(){
		let aux =[];
		let size = this._cartas.length;
		for (let i = 0; i < size; i++){
			let random = obtenerNumeroAleatorio(0, this._cartas.length - 1);
			let carta = this._cartas.splice(random, 1)[0];
			aux.push(carta);
		}
		this._cartas = aux;
	}
	
}