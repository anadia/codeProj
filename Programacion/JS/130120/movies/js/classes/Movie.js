function Movie(name, director, year, type){
	this.name = name;
	this.director = director;
	this.year = year;
	this.type = type;
	this.lent = false;
		
	Movie.prototype.lend = function(){
		this.lent = true;
	}
	
	Movie.prototype.return = function(){
		this.lent = false;
	}
	
	Movie.prototype.getMovieInfo = function(){
		return this.lent;
	}
	
	Movie.prototype.getYear = function(){
		return this.year;
	}
	
	Movie.prototype.setYear = function(year){
		this.year = year;
	}
	
	Movie.prototype.getDirector = function(){
		return this.director;
	}
	
	Movie.prototype.setDirector = function(director){
		this.director = director;
	}
	
	Movie.prototype.getType = function(){
		let text = "";
		switch(this.type){
			case Movie.DRAMA:
				text = "Drama";
				break;
			case Movie.ACCION:
				text = "Accion";
				break;
			case Movie.TERROR:
				text = "Terror";
				break;
			case Movie.INDIE:
				text = "Indie";
				break;
			case Movie.COMEDIA:
				text = "Comedia";
				break;
			default:
				text = "Error";
				break;
		}	
		
		return text;
	}
}

Movie.DRAMA = 1;
Movie.ACCION = 2;
Movie.TERROR = 5;
Movie.INDIE = 4;
Movie.COMEDIA = 3;