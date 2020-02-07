function GameShop() {
	this.videogames = [];

	GameShop.prototype.addVideoGame = function (videogame) {
		this.videogames.push(videogame);
	}

	GameShop.prototype.getVideoGames = function () {
		return this.videogames;
	}

	GameShop.prototype.deleteVideoGame = function (id) {
		let position = -1;
		for (let i = 0; i < this.videogames.length && position == -1; i++) {
			if (this.videogames[i].getId() == id) {
				position = i;
			}
		}

		if (position != -1) {
			this.videogames.splice(position, 1);
		}
	}

	GameShop.prototype.rentVideoGame = function (id) {
		let found = false;
		for (let i = 0; i < this.videogames.length && !found; i++) {
			if (this.videogames[i].getId() == id) {
				if (this.videogames[i].isAvailable()) {
					this.videogames[i].rent();
				}
			}
		}
	}

	GameShop.prototype.sellVideoGame = function (id) {
		let found = false;
		for (let i = 0; i < this.videogames.length && !found; i++) {
			if (this.videogames[i].getId() == id) {
				if (this.videogames[i].isRented() || this.videogames[i].isAvailable()) {
					this.videogames[i].sell();
				}
			}
		}
	}

	GameShop.prototype.setAvailable = function (id) {
		let found = false;
		for (let i = 0; i < this.videogames.length && !found; i++) {
			if (this.videogames[i].getId() == id) {
				if (this.videogames[i].isRented()) {
					this.videogames[i].available();
				}
			}
		}
	}


}