function Car(color, brand, year, milleage, gas, state, buyingPrice) {
	this.id = new Date().getTime();

	this.color = color;
	this.brand = brand;

	this.year = 1980;
	if (year > 1950 &&
		year <= new Date().getFullYear()) {
		this.year = year;
	}

	this.milleage = milleage;
	this.gas = gas;
	this.state = state;
	this.buyingPrice = buyingPrice;
	this.sellingPrice = buyingPrice * 1.2;
	this.finalPrice = null;

	Car.prototype.getId = function () {
		return this.id;
	}

	Car.prototype.reserve = function () {
		this.state = Car.STATE_RESERVED;
	}

	Car.prototype.sell = function () {
		this.state = Car.STATE_SOLD;
	}

	Car.prototype.available = function () {
		this.state = Car.STATE_AVAILABLE;
	}

	Car.prototype.isAvailable = function () {
		return this.state == Car.STATE_AVAILABLE;
	}

	Car.prototype.isReserved = function () {
		return this.state == Car.STATE_RESERVED;
	}

	Car.prototype.isSold = function () {
		return this.state == Car.STATE_SOLD;
	}

	Car.prototype.parseColor = function () {
		let col = "Error";

		switch (this.color) {
			case Car.COLOR_BLACK:
				col = "Negro";
				break;
			case Car.COLOR_BLUE:
				col = "Azul";
				break;
			case Car.COLOR_WHITE:
				col = "Blanco";
				break;
			case Car.COLOR_RED:
				col = "Rojo";
				break;
		}

		return col;
	}

	Car.prototype.parseGas = function () {
		let col = "Error";

		switch (this.gas) {
			case Car.GAS_DIESEL:
				col = "Diesel";
				break;
			case Car.GAS_GASOLINE:
				col = "Gasolina";
				break;
			case Car.GAS_HYBRID:
				col = "Hibrido";
				break;
			case Car.GAS_ELECTRIC:
				col = "Electrico";
				break;
		}

		return col;
	}

	Car.prototype.toString = function () {
		let text = this.brand + ": " + this.year + " - " + this.color + "\n";
		text += this.milleage + " - " + this.sellingPrice + "€";
		return text;
	}
}

Car.COLOR_BLACK = 1;
Car.COLOR_BLUE = 2;
Car.COLOR_WHITE = 3;
Car.COLOR_RED = 4;

Car.GAS_DIESEL = 1;
Car.GAS_GASOLINE = 2;
Car.GAS_HYBRID = 3;
Car.GAS_ELECTRIC = 4;

Car.STATE_AVAILABLE = 1;
Car.STATE_RESERVED = 2;
Car.STATE_SOLD = 3;