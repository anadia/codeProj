/**
*	Representa cada uno de los videojuegos disponibles en la tienda
*/
function Videogame(jVg, name, price, platform, genre){
	
	if (jVg){
		this.id = jVg.id;
		this.name = jVg.name;
		this.price = jVg.price;
		this.platform = jVg.platform;
		this.genre = jVg.genre;
		this.state = jVg.state;		
	}
	else {
		this.id = new Date().getTime();
		this.name = name;
		this.price = price;
		this.platform = platform;
		this.genre = genre;
		this.state = Videogame.STATE_AVAILABLE;
	}
	
	Videogame.prototype.getVGPlatform = function (){
		let platform = "Switch";
		
		if (this.platform == Videogame.PLATFORM_PS4){
			platform = "PS4";
		}
		else if (this.platform == Videogame.PLATFORM_XBOX){
			platform = "X-BOX";
		}
		
		return platform;
	}
	
	Videogame.prototype.getVGGenre = function (){
		let genre = "FPS";
		
		if (this.genre == Videogame.GENRE_ACTION){
			genre = "Acción";
		}
		else if (this.genre == Videogame.GENRE_PLATFORMS){
			genre = "Plataformas";
		}
		
		return genre;
	}
	
	Videogame.prototype.sellVG = function (){
		this.state = Videogame.STATE_SOLD;
	}
	
	Videogame.prototype.rentVG = function (){
		this.state = Videogame.STATE_RENTED;
	}
	
	Videogame.prototype.makeVGAvailable = function (){
		this.state = Videogame.STATE_AVAILABLE;
	}
	
	Videogame.prototype.isAvailable = function (){
		return this.state == Videogame.STATE_AVAILABLE;
	}
	
	Videogame.prototype.isRented = function (){
		return this.state == Videogame.STATE_RENTED;
	}
	
	Videogame.prototype.isSold = function (){
		return this.state == Videogame.STATE_SOLD;
	}
	
	
	Videogame.prototype.toJSONObject = function (){
		let jVg = {};	
		
		jVg.id = this.id;
		jVg.name = this.name;
		jVg.price = this.price;
		jVg.platform = this.platform;
		jVg.genre = this.genre;
		jVg.state = this.state;	
		
		return jVg;
	}
	
}

Videogame.STATE_AVAILABLE = 1;
Videogame.STATE_RENTED = 2;
Videogame.STATE_SOLD = 3;

Videogame.GENRE_ACTION = 1;
Videogame.GENRE_PLATFORMS  = 2;
Videogame.GENRE_FPS = 3;

Videogame.PLATFORM_PS4 = 1;
Videogame.PLATFORM_XBOX  = 2;
Videogame.PLATFORM_SWITCH = 3;
