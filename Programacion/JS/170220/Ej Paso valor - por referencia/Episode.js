function Episode(jEpisode, name, show, season, number, genre, duration) {
	
	
	this.name = name;
	this.show = show;
	this.season = season;
	this.number = number; 
	this.genre = genre;
	this.duration = duration;


	Episode.prototype.getShow = function(){
		return this.show;
	}
	
	Episode.prototype.getSeason = function(){
		return this.season;
	}
	
	Episode.prototype.getNumber = function(){
		return this.number;
	}
	
	Episode.prototype.getDuration = function(){
		return this.duration;
	}
	
	Episode.prototype.toString = function(){
		let text = this.name;
		text += " - " + this.show;
		text += " S0" + this.season + "E0" + this.number;
		text += " - " + this.duration;

		return text;
	}
	
	

}

Episode.GENRE_FANTASY = 1;
Episode.GENRE_DRAMA = 2;
Episode.GENRE_MYSTERY = 3;