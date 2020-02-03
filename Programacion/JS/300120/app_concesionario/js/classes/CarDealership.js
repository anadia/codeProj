function CarDealership() {
	this.cars = []; // = new Array();

	CarDealership.prototype.addCar = function (car) {
		this.cars.push(car);
	}

	CarDealership.prototype.getCars = function () {
		return this.cars;
	}

	CarDealership.prototype.deleteCar = function (id) {
		let position = -1;
		for (let i = 0; i < this.cars.length && position == -1; i++) {
			if (this.cars[i].getId() == id) {
				position = i;
			}
		}

		if (position != -1) {
			this.cars.splice(position, 1);
		}
	}

	CarDealership.prototype.reserveCar = function (id) {
		let found = false;
		for (let i = 0; i < this.cars.length && !found; i++) {
			if (this.cars[i].getId() == id) {
				if (this.cars[i].isAvailable()) {
					this.cars[i].reserve();
				}
			}
		}
	}

	CarDealership.prototype.sellCar = function (id) {
		let found = false;
		for (let i = 0; i < this.cars.length && !found; i++) {
			if (this.cars[i].getId() == id) {
				if (this.cars[i].isReserved() || this.cars[i].isAvailable()) {
					this.cars[i].sell();
				}
			}
		}
	}

	CarDealership.prototype.setAvailable = function (id) {
		let found = false;
		for (let i = 0; i < this.cars.length && !found; i++) {
			if (this.cars[i].getId() == id) {
				if (this.cars[i].isReserved()) {
					this.cars[i].available();
				}
			}
		}
	}


}