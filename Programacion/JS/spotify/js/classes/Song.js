function Song(jSong, id, title, band, duration, rating){
	this.addedDate = null;
	
	if (jSong) {		
		this.id = jSong.id;
		this.title = jSong.title;
	    this.band = jSong.band;
		this.duration = jSong.duration;
        this.rating = jSong.rating;
        
		if (jSong.addedDate) 
			this.addedDate = jSong.addedDate;		
	}
	else {
		this.id = id;
		this.title = title;
		this.band = band;
		this.duration = duration;
		this.rating = rating;
	}
	
	Song.prototype.print = function(){
		return "La canción " + this.title + " me encanta y en Apple sólo le " +
		"dan " + this.rating + " estrellas";
	}
	
	Song.prototype.getDuration = function(){
		return this.duration;
	}
	
	Song.prototype.getId = function(){
		return this.id;
	}
	
	Song.prototype.getTitle = function(){
		return this.title;
	}
	
	Song.prototype.getBand = function(){
		return this.band;
	}
	
	Song.prototype.toJSONObject = function(){
		let jSong = {};
		
		jSong.id = this.id;
		jSong.title = this.title;
	    jSong.band = this.band;
		jSong.duration = this.duration;
        jSong.rating = this.rating;
        
		if (this.addedDate) 
			jSong.addedDate = this.addedDate;
		
		return jSong;
	}
	
}