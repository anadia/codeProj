function Appliance (basePrice, color, energyConsumption, weight){
	//métodos privados: se tienen que crear antes de ser utilizados en el constructor
	Appliance.prototype.parseEnergyConsumption = function(energyConsumption){
		energyConsumption = energyConsumption.toUpperCase();
		
		if (energyConsumption.charCodeAt(0) >= 65 && energyConsumption.charCodeAt(0) <= 70) {
			this.energyConsumption = energyConsumption;
		}
		else {
			this.energyConsumption = "F";
		}
		
		return this.energyConsumption;		
	}
	
	Appliance.prototype.checkColor = function(color){
		let res = false;
		
		if (color >= Appliance.COLOR_WHITE && color <= Appliance.COLOR_GREY){
			res = true;
		}
		
		return res;
	}
	
	//constructor
	
	this.basePrice = 100;
	if (basePrice && !isNaN(basePrice)) {
		this.basePrice = basePrice;
	}
	
	this.color = Appliance.COLOR_WHITE;
	if (this.checkColor(color)) {
		this.color = color;
	}
	
	this.weight = 5;
	if (weight && !isNaN(weight)) {
		this.weight = weight;
	}
	
	this.energyConsumption = this.parseEnergyConsumption(energyConsumption);
	
	
	//métodos públicos
	
	Appliance.prototype.getPrice = function(){
		return this.basePrice + this.getConsumptionPriceIncrement() + 
			this.getWeightPriceIncrement();
	}
	
	Appliance.prototype.getConsumptionPriceIncrement = function(){
		let price = 0;
		
		switch(this.energyConsumption) {
			case "A":
				price = 100;
				break;
			case "B": 
				price = 80;
				break;
			case "C":
				price = 60;
				break;
			case "D":
				price = 50;
				break;
			case "E":
				price = 30;
				break;
			case "F":
				price = 10;
				break;

		}
		
		return price;

	}
	
	Appliance.prototype.getWeightPriceIncrement = function(){
		let price = 0;
		
		if (this.weight >= 0 && this.weight <= 19) {
			price = 10;
		}
		else if (this.weight >= 20 && this.weight <= 49) {
			price = 50;
		}
		else if (this.weight >= 50 && this.weight <= 79) {
			price = 80;
		}
		else if (this.weight >= 80) {
			price = 100;
		}
		
		return price;
	}

	
}

Appliance.COLOR_WHITE = 1;
Appliance.COLOR_BLACK = 2;
Appliance.COLOR_RED = 3;
Appliance.COLOR_BLUE = 4;
Appliance.COLOR_GREY = 5;