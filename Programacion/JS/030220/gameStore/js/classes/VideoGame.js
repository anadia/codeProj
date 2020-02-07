function VideoGame (name, platform, genre, priceRental, priceSell,state){
    this.id = new Date().getTime();
	this.name = name;
	this.platform = platform;
	this.genre = genre;
    this.priceRental = priceRental;
    this.priceSell = priceSell;
	this.state = state;

    //metodos

    VideoGame.prototype.getId = function () {
		return this.id;
	}

    VideoGame.prototype.rent = function () {
		this.state = VideoGame.STATE_RENTED;
    }
    
    VideoGame.prototype.sell = function () {
		this.state = VideoGame.STATE_SOLD;
	}

    VideoGame.prototype.available = function () {
		this.state = VideoGame.STATE_AVAILABLE;
    }
    
    VideoGame.prototype.isAvailable = function () {
		return this.state == VideoGame.STATE_AVAILABLE;
    }

    VideoGame.prototype.isRented = function () {
		return this.state == VideoGame.STATE_RENTED;
	}

	VideoGame.prototype.isSold = function () {
		return this.state == VideoGame.STATE_SOLD;
	}

    VideoGame.prototype.parsePlatform = function() {
		console.log(this.platform);
		let col = "Error";
		switch (this.platform) {
			case VideoGame.PLAT_XBOX360:
				col = "XBox";
				console.log(col);
				break;
			case VideoGame.PLAT_PS4:
				col = "PS4";
				console.log(col);
				break;
			case VideoGame.PLAT_SWITCH:
				col = "Switch";
				console.log(col);
				break;
		}
		console.log(this.platform);
		return col;
    }
    
    VideoGame.prototype.parseGenre = function() {
		let col = "Error";

		switch (this.genre) {
			case VideoGame.GENRE_ACTION:
				col = "Action";
				break;
			case VideoGame.GENRE_PLATFORM:
				col = "Platform";
				break;
			case VideoGame.GENRE_FPS:
				col = "FPS";
				break;
        }
		return col;
	}


	VideoGame.prototype.toString = function () {
		let text = this.name + ": " + this.platform + " - " + this.genre + "\n";
		text += this.priceRental + "€"+ " - " + this.priceSell + "€";
		return text;
	}


}

VideoGame.PLAT_XBOX360 = 1;
VideoGame.PLAT_PS4 = 2;
VideoGame.PLAT_SWITCH = 3;

VideoGame.GENRE_ACTION = 1;
VideoGame.GENRE_PLATFORM = 2;
VideoGame.GENRE_FPS = 3;

VideoGame.STATE_AVAILABLE = 1;
VideoGame.STATE_RENTED = 2;
VideoGame.STATE_SOLD = 3;

