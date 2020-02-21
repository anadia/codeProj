function WashingMachine(basePrice, color, energyConsumption, weight, load){
	Appliance.call(this, basePrice, color, energyConsumption, weight);
	
	this.load = 5;
	if (load && !isNaN(load)){
		this.load = load;
	}
	
	WashingMachine.prototype.getLoad = function(){
		return this.load;
	}


	WashingMachine.prototype.getPrice = function(){
		let amount = //llamar al método getPrice() de la clase Padre
		let incrementByLoad = 0;
		if (this.load > 30){
			incrementByLoad = 50;
		}
		
		return amount + incrementByLoad;
	}

}

WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;