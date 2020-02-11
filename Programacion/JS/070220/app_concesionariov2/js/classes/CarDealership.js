function CarDealership(jCarStore){
	this.cars = []; // = new Array();

	if (jCarStore){
		let jCars = jCarStore.mcars;
		
		for (let jCar of jCars){
			let car = new Car(jCar);
			this.cars.push(car);
		}
	}


	CarDealership.prototype.addCar = function(car){
		this.cars.push(car);
	}
	
	CarDealership.prototype.getCars = function(){
		return this.cars;
	}
	
	CarDealership.prototype.deleteCar = function(id){
		let position = -1;
		for (let i = 0; i < this.cars.length && position == -1; i++){
			if (this.cars[i].id == id){
				position = i;
			}
		}
		
		if (position != -1){
			this.cars.splice(position, 1);
		}
	}
	
	CarDealership.prototype.reserveCar = function(id){	
		let found = false;
		let car = null;
		for (let i = 0; i < this.cars.length && !found; i++){
			if (this.cars[i].id == id){
				if (this.cars[i].isAvailable()) {
					this.cars[i].reserve();
					car = this.cars[i];
				}
			}
		}	
		return car;	
	}
	
	CarDealership.prototype.sellCar = function(id){	
		let found = false;
		let car = null;
		for (let i = 0; i < this.cars.length && !found; i++){
			if (this.cars[i].id == id){
				if (this.cars[i].isReserved() || this.cars[i].isAvailable()) {
					this.cars[i].sell();
					car = this.cars[i];
				}
			}
		}	
		return car;		
	}
	
	CarDealership.prototype.updateCar = function(car){	
		let found = false;
		for (let i = 0; i < this.cars.length && !found; i++){
			if (this.cars[i].id 
				== 
				car.id){
				this.cars[i] = car;
			}
		}				
		
	}


	CarDealership.prototype.setAvailable = function(id){	
		let found = false;
		let car = null;
		for (let i = 0; i < this.cars.length && !found; i++){
			if (this.cars[i].id == id){
				if (this.cars[i].isReserved()) {
					this.cars[i].available();
					car = this.cars[i];
				}
			}
		}
		return car;			
	}
	
	CarDealership.prototype.orderByBrand = function(id){	
		this.cars.sort
	}

	CarDealership.prototype.orderByBrand = function(){
		this.cars.sort(
			function (a, b){
				if (a.brand > b.brand) {
					return 1;
				}
				else if (a.brand < b.brand) {
					return -1;
				}
				else {
					return 0;
				}
			}
		);
	}

	CarDealership.prototype.orderByBuyingPrice = function(){
		this.cars.sort(
			function (a, b){
				return b.buyingPrice - a.buyingPrice;
			}
		);
	}

	CarDealership.prototype.orderByStatus = function(){
		this.cars.sort(
			function (a, b){
				return a.state - b.state;
			}
		);
	}

	CarDealership.prototype.toJSONObject = function(){
		let jCarStore = {};
		
		let jCars = [];
		for (let car of this.cars){
			let jCar = car.toJSONObject();
			jCars.push(jCar);
		}
		jCarStore.mcars = jCars;
		
		return jCarStore;
	}


	
}